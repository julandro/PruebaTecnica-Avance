import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';

const Rutas = () => {
    return (
            <Router>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Router>
        );
}

export default Rutas;