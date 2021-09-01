import * as React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const children = new Array(300).fill(0).map((_, i) => require(`components/C${i}/Component`).default());
  return <>{children}</>;
}

ReactDOM.render(<App />, document.querySelector('#entrypoint'));
