import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://641c69d5b556e431a86e1364.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (__, thunkAPI) => {
    // під капотом dispatch({type: 'contacts/fetchAll/pending}), яку робить thunk
    try {
      const response = await axios.get('/contacts');
      return response.data;
      // під капотом dispatch({type: 'contacts/fetchAll/fulfilled, payload: response.data})
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
      // під капотом dispatch({type: 'contacts/fetchAll/rejected, payload: error.message})
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      // console.log(response.data);
      return response.data; //те що повертаємо звідси це paylooad.success
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//одразу деструктуризуємо rejectWithValue from thunkAPI
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
