import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66af6f18b05db47acc59d46f.mockapi.io/';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error fetching data!');
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error fetching data!');
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error fetching data!');
    }
  },
);
