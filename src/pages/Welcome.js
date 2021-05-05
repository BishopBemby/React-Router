import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <p>Welcome page</p>
      {/* Nested route */}
      <Route path="/welcome/sasuke">
        <p>Welcome, Sasuke</p>
      </Route>
    </section>
  );
};

export default Welcome;
