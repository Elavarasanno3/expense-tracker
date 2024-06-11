import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    transactions: [],
    loading: false,
    error: null,
  },
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
    }
  }
});

export const { setTransactions, setLoading, setError, addTransaction, deleteTransaction } = transactionSlice.actions;

export const fetchTransactions = (userId) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.get(`http://localhost:8080/api/transactions/user/${userId}`);
    dispatch(setTransactions(response.data));
  } catch (error) {
    dispatch(setError('Error fetching transactions'));
    console.error('Error fetching transactions:', error);
  }
};

export const createTransaction = (transaction) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.post('http://localhost:8080/api/transactions/add', transaction);
    dispatch(addTransaction(response.data));
  } catch (error) {
    dispatch(setError('Error adding transaction'));
    console.error('Error adding transaction:', error);
  }
};

export const removeTransaction = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/api/transactions/delete/${id}`);
    dispatch(deleteTransaction(id));
  } catch (error) {
    dispatch(setError('Error deleting transaction'));
    console.error('Error deleting transaction:', error);
  }
};

export default transactionSlice.reducer;
