import { h } from "preact";
import { PureComponent } from "preact/compat";
import { AwesomeButtonProgress } from "react-awesome-button";

interface State {
  value: number | null;
}

export default class App extends PureComponent<{}, State> {
  constructor() {
    super();
    this.state = { value: null };
  }

  onPress = (_, done) => {
    setTimeout(() => {
      done();
      this.setState({
        value: 9000
      });
    }, 5000);
  };

  render() {
    const displayingValue = this.state.value || "Press the button";
    return (
      <div>
        <h2>{displayingValue}</h2>
        <AwesomeButtonProgress
          ripple
          type="primary"
          size="large"
          loadingLabel="Generating..."
          onPress={this.onPress}
        >
          Generate {this.state.value && "another"}
        </AwesomeButtonProgress>
      </div>
    );
  }
}
