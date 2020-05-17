import { h } from "preact";
import { PureComponent } from "preact/compat";
import { AwesomeButton } from "react-awesome-button";

interface State {
  value: number | null;
}

export default class App extends PureComponent<{}, State> {
  constructor() {
    super();
    this.state = { value: null };
  }

  onPress = () => {
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
          onPress={this.onPress}
        >
          Generate {this.state.value && "another"}
        </AwesomeButton>
      </div>
    );
  }
}
