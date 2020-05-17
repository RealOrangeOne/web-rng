import { h } from "preact";
import { PureComponent } from "preact/compat";
import { AwesomeButton } from "react-awesome-button";

import { generateRandomValue, initRandom } from "./random";

interface State {
  value: number | null;
}

export default class App extends PureComponent<{}, State> {
  constructor() {
    super();
    this.state = { value: null };
  }

  componentDidMount() {
    initRandom();
  }

  onPress = () => {
    this.setState({
      value: generateRandomValue(0, 100)
    });
  };

  render() {
    const displayingValue =
      this.state.value === null ? "Press the button" : this.state.value;
    return (
      <div>
        <h2>{displayingValue}</h2>
        <AwesomeButton
          ripple
          type="primary"
          size="large"
          onPress={this.onPress}
        >
          Generate
        </AwesomeButton>
      </div>
    );
  }
}
