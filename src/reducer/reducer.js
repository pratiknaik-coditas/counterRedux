
const init={
    counter:[]
    };

export function reducers(state=init,action) {
    switch(action.type) {

        case 'ADD_COUNTER':

        {let  newCounter={
          count:0,
        }
        
        return{...state,counter:state.counter.concat(newCounter)}
        }

        case 'INCREMENT':
        {
        let newCntr;
        newCntr=state.counter.slice();

       (++newCntr[action.index].count);

        return {...state,counter:newCntr};  
        }

        case 'DECREMENT':
        {
        let newCntr;
        newCntr=state.counter.slice();
        (--newCntr[action.index].count);

        return{...state,counter:newCntr};
        }
        
        case 'DELETE_COUNTER':{
          // let newCntr;

          // newCntr=state.counter.slice();
          
          let a;
          a=state.counter.slice();
          a=a.filter((count,index)=>(index!=action.index));

          return{...state,counter:a};

        }
        default:       
          return state;
      }



}
    