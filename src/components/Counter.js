import React from 'react';

 class Counter extends React.Component {
    
    render() {
        return (
            <div>
                <center>
                <h2>Counter</h2>
                <div>
                    
                    <button onMouseDown={this.props.decrement}>-</button>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.count}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <button onMouseDown={this.props.increment}>+</button>
                </div>
                </center>

            </div>
        );
    }
}

export default Counter;