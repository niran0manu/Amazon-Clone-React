export const initialState = {
    basket: [],
};

const reducer =(state, action) => {    // reducer takes in 2 parameters state and action 
     console.log(action);
    switch(action.type) {              // assign the action type 
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };
          default:
              return state;  

    }




};

export default reducer;
// Reducer enables pushing the content in to the data layer
