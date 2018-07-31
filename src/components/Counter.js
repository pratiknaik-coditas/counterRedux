import React from 'react';

 class Counter extends React.Component {
    
    constructor(){
        super();
    }
    

    render() {
        return (
            <div>
                <center>
                <h2>Counter</h2>
                <div key={this.props.index}>
                    <button onClick={this.props.doDecrement} >-</button>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.count}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <button onClick={this.props.doIncrement}>+</button>
                </div> <br /><br />
                <button onClick={this.props.deleteCounter}>Delete This</button>  
                </center>
            </div>
        );
    }
}

export default Counter;