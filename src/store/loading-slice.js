import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
    resultsLoading: false,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setResultsLoading(state, action) {
      state.resultsLoading = action.payload;
    },
  },
});

export const loadingActions = loadingSlice.actions;
export default loadingSlice;
