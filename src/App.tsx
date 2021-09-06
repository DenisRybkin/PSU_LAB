import React from 'react';
import {Route} from 'react-router-dom';
import {Home} from "./pages/Home/Home";
import {useDispatch} from "react-redux";
import {fetchData} from "./redux/actions/fetchData";
import {fetchColors} from "./redux/actions/fetchColors";

function App() : JSX.Element {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchData());
        dispatch(fetchColors());
    }, [dispatch]);


    return (
        <Route path="/" exact>
            <Home />
        </Route>
  );
}

export default App;
