// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import { environment } from '../environments/environment';
import './app.scss';

export function App() {
  const [hits, setHits] = useState(-1);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [nameSpace, setNameSpace] = useState('countapi.xyz');

  /**
   *
   */
  const fetchHits = () => {
    setFetching(true);

    fetch(`${environment.urlHit}/hit/${nameSpace}`)
      .then((res) => res.json())
      .then((res) => {
        setHits(res.value);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setFetching(false);
      });
  };

  return (
    <section className="container">
      <input
        className={'half-width'}
        type="text"
        onChange={(val) => setNameSpace(val.target.value)}
        value={nameSpace}
      />
      <button className="search-btn" onClick={fetchHits} disabled={fetching}>
        Search Hits
      </button>

      {hits >= 0 && !error && (
        <div className="hit-container full-width">
          {fetching ? (
            <progress className="full-width"></progress>
          ) : (
            <section className="result-container">
              The user has searched or visited this enpoint:{' '}
              <span style={{ color: 'blue' }}>{hits}</span> times.
            </section>
          )}
        </div>
      )}
      {error && <div className="error-container">{error}</div>}
    </section>
  );
}

export default App;
