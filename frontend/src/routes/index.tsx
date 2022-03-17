import {
    BrowserRouter,
    Routes as Switch,
    Route,
    Navigate,
} from "react-router-dom";

import Home from "../pages/Home";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Route path="" element={<Navigate to="home" />} />
                    <Route path="home" element={<Home />} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
