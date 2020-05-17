import { h } from "preact";
import { PureComponent } from "preact/compat";
import { AwesomeButtonProgress } from "react-awesome-button";

import generateRandomValue from "./random";

interface State {
  value: number | null;
}

export default class App extends PureComponent<{}, State> {
  constructor() {
    super();
    this.state = { value: null };
  }

  onPress = (_, done) => {
    this.setState({
      value: generateRandomValue(0, 10)
    });
    setTimeout(() => {
      done();
    }, 50);
  };

  render() {
    const displayingValue = this.state.value === null ? "Press the button" : this.state.value;
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
          Generate
        </AwesomeButtonProgress>
      </div>
    );
  }
}
