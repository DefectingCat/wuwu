import { Router } from '@solidjs/router';
import Main from 'layouts/Main';
import routes from 'routes';
import { type Component } from 'solid-js';

const App: Component = () => {
  return (
    <>
      <Main>
        <Router>{routes}</Router>
      </Main>
    </>
  );
};

export default App;
