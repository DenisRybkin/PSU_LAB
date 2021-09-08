import React from 'react';
import {Route} from 'react-router-dom';
import {Home} from "./pages/Home/Home";

function App() : JSX.Element {

    return (
        <Route path="/" exact>
            <Home />
        </Route>
  );
}

export default App;
