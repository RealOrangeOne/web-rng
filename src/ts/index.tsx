import { h, render } from "preact";
import { PureComponent } from "preact/compat";
import { AwesomeButton } from "react-awesome-button";

interface State {
  value: Number | null;
}

class App extends PureComponent<{}, State> {
  constructor() {
    super();
    this.state = { value: null };
  }

  handlePress = () => {
    this.setState({
      value: 9000
    });
  };

  render() {
    const displayingValue = this.state.value || "Press the button";
    return (
      <div>
        <h2>{displayingValue}</h2>
        <AwesomeButton
          ripple
          type="primary"
          size="large"
          onPress={this.handlePress}
        >
          Generate {this.state.value && "another"}
        </AwesomeButton>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
