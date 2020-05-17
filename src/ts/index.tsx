import { h, render } from "preact";
import { AwesomeButton } from "react-awesome-button";

const App = () => (
  <AwesomeButton ripple type="primary" size="large">
    Button
  </AwesomeButton>
);

render(<App />, document.body);
