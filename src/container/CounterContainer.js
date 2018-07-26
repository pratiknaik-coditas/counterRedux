import { connect } from 'react-redux';
import React from 'react';
import Counter from '../components/Counter';

export class CounterContainer extends React.Component{

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }
    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    render()
    {
        return(
            <Counter count={this.props.count} increment={this.increment} decrement={this.decrement}/>
        );
    }


}

function mapStateToProps(state) {
    return {
      count: state.count
    };
  }

  function mapDispatchToProps(){
      
  }

export default connect(mapStateToProps)(CounterContainer);