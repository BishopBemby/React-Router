import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import Details from "./pages/Details";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
       {/* Switch component will make sure the routes are not loaded on same page due to Link component, so will execute one by one from t-b but it wont match full path if it finds a match while parsing it will take that and dosplay it only, therefore, we use exact keywprd with second route to endure that the exact route path is matched and parsed. */}
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <Details />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
