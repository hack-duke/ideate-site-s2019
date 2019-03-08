import React from 'react';

export default class BrowserOnly extends React.Component {
  state = {
    mounted: false
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    const { mounted } = this.state;
    const { children } = this.props;
    return mounted && children;
  }
}
