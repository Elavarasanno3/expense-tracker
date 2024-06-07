const ADD_TRANSACTION = 'ADD_TRANSACTION';
const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
const EDIT_TRANSACTION = 'EDIT_TRANSACTION';

export const addTransaction = (transactionData) => ({
  type: ADD_TRANSACTION,
  payload: transactionData
});

export const deleteTransaction = (index) => ({
  type: DELETE_TRANSACTION,
  payload: index
});

export const editTransaction = (index, newData) => ({
  type: EDIT_TRANSACTION,
  payload: { index, newData }
});

const initialState = {
  transactions: []
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter((_, index) => index !== action.payload)
      };
    case EDIT_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map((transaction, index) => {
          if (index === action.payload.index) {
            return { ...transaction, ...action.payload.newData };
          }
          return transaction;
        })
      };
    default:
      return state;
  }
};

export default transactionReducer;
