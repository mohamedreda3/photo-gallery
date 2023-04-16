import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  data: [],
  status: null,
  error: null,
};

const getPhotoes = createAsyncThunk("photoes/getPhotoes", async () => {
  try {
    const response = await axios.get("https://picsum.photos/v2/list");
    return response;
  } catch (err) {
    return err;
  }
});

const photoSlice = createSlice({
  initialState,
  name: "photoes",
  extraReducers: {
    [getPhotoes.pending]: (state) => {
      state.status = "loading";
    },
    [getPhotoes.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    [getPhotoes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { photoesLoaded } = photoSlice.actions;
export default photoSlice.reducer;
