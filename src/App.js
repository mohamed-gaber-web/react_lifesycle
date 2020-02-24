import React from 'react';
import './App.css';
import Test from './test';

class App extends React.Component {

  constructor(props) { 
    super(props);
    this.state = {
      name: "mohamed",
      loading: true
    }
    this.changeName = this.changeName.bind(this);
    console.log("Constructor");
  }

  componentDidMount() { 
    console.log("component did mount..");
    // this.setState({name: "wael"})
    // componentDidMount() is invoked immediately after a component is mounted or loaded
    // If you need to load data from a remote endpoint, this is a good place to instantiate the network request
  }

  shouldComponentUpdate(nextProps, nextState) { 
    console.log("should component update");
    console.log(nextProps)
    console.log(nextState)
    return true;
  }

  componentDidUpdate(prevProp, prevState) { 
    // is invoked immediately after updating occurs
    // prevState - prevProps
    console.log("component did update.. ");
    console.log(prevProp)
    console.log(prevState)
  }

  componentWillUnmount() { 
    //  is invoked immediately before a component is unmounted and destroyed
    console.log("component will unmount")
  }


  changeName() { 
    this.setState({loading: !this.state.loading})
    this.setState({name: "ahmed"})
  }

  render() { 
    console.log("render method")
    return (
      <div className="App">
        <Test name={this.state.name} change={this.changeName} />
        <h1> {!this.state.loading ? "UPDATING COMPONENT" : "LOADING....."} </h1>
        <img src="react-lifesycle.png" alt="" />
      </div>
    );
  }
}

export default App;
