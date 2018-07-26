import { connect } from 'react-redux';
import React from 'react';

class Counter extends React.Component {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }
    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }
    render() {
        return (
            <div>
                <center>
                <h2>Counter</h2>
                <div>
                    
                    <button onMouseDown={this.decrement}>-</button>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.count}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <button onMouseDown={this.increment}>+</button>
                </div>
                </center>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
  }

  function mapDispatchToProps(){
      
  }

export default connect(mapStateToProps)(Counter);