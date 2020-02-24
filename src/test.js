import React, { Component } from 'react'

class Test extends Component { 
    componentDidMount() { 
        console.log("component test did mount ");
    }
    
    componentDidUpdate(prevProps, prevState) { 
        console.log("component test did update.. ");
        console.log(prevProps)
        console.log(prevState)
      }
    render() { 
        return (
            <div className="bg-text">
                {this.props.name}
                <div className="btn-name">
                    <button onClick={this.props.change}> Change Name </button>
                </div>
            </div>
        );
    }
}

export default Test;