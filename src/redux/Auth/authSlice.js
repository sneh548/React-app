import { createSlice } from "@reduxjs/toolkit";
// import { loginUser } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    // loading: false,
    // error: null,
    user: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   // You can add async thunks here if needed
  //   builder
  //     .addCase(loginUser.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(loginUser.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.user = action.payload;
  //       // state.error = null;
  //     })
  //     .addCase(loginUser.rejected, (state, action) => {
  //       state.error = action.payload;
  //       state.loading = false;
  //     });
  // },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
