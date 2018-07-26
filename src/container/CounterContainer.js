import { connect } from 'react-redux';
import React from 'react';
import Counter from '../components/Counter';

export class CounterContainer extends React.Component{

    render()
    {
        return(
            <Counter count={this.props.count} doIncrement={this.props.doIncrement} doDecrement={this.props.doDecrement}/>
        );
    }
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
  }

  function mapDispatchToProps(dispatch)
  {
    return({
        doIncrement:()=>{dispatch('INCREMENT')},
        doDecrement:()=>{dispatch('DECREMENT')},
    });
  }

export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer);