import React from 'react';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isLoading: true
    }

    setTimeout(() => {
      this.setState({isLoading: false})
    }, 2000)
  }
  render() {
    if (this.state.isLoading) return <h1>Loading</h1>
    else return <h1>Witaj</h1>
  }
}

export default App;
