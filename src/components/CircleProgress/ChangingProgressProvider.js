import React from 'react';

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 30,
  };

  state = {
    valuesIndex: 0,
  };

  componentDidMount() {
    this.progress()
    // setInterval(() => {
    //   this.setState({
    //     valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length,
    //   })
    // }, this.props.interval)
  }

  progress = async () => {
    const duzina = this.props.values.length

    for (let index = 1, length = duzina; index < length; index += 1) {
      await new Promise((resolve) => setTimeout(resolve, 5))
      this.setState({
        valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length,
      })
    }
  };
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(nextProps, nextState)
  //     console.log(this.props, this.state)
  //     if (this.state.valuesIndex === 82) {
  //       return false
  //     }
  //     return true
  //   }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex])
  }
}

export default ChangingProgressProvider
