import { connect } from 'react-redux';
import React from 'react';
import Counter from '../components/Counter';

export class CounterContainer extends React.Component{

    render()
    {   console.log(this.props.cntr);
        return(
                <div>
                    <center><h3> Add new Counter</h3>
                <button onClick={this.props.addCounter} >Add New</button>
                <br />
                {/* <h3>Delete Counter</h3>
                <button onClick={this.props.deleteCounter}>Delete Counter</button> */}
                </center>
                {this.props.cntr.map(
                (counter,index)=>{  
                return(
                <Counter 
                key={index}
                count={counter.count}
                id={index} 
                doIncrement={()=>this.props.doIncrement(index)} 
                doDecrement={()=>this.props.doDecrement(index)}
                deleteCounter={()=>this.props.deleteCounter(index)} />
                );
                }
                )}

                </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("mapstateToprops",state);
    return {
      cntr: state.counter
    };
  }

  function mapDispatchToProps(dispatch)
  {
    return({
        doIncrement:(index)=>{dispatch({type:'INCREMENT',index:index})},
        doDecrement:(index)=>{dispatch({type:'DECREMENT',index:index})},
        addCounter:()=>{dispatch({type:'ADD_COUNTER'})},
        deleteCounter:(index)=>{dispatch({type:'DELETE_COUNTER',index:index})},
    });
  }

export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer);