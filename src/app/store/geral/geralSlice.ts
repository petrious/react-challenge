import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GERAL_INITIAL_STATE, GeralState } from "./geralState";

export const geralSlice = createSlice({
  name: "geral",
  initialState: GERAL_INITIAL_STATE,
  reducers: {
    setName: (
      state,
      action: PayloadAction<{
        firstName: GeralState["firstName"];
        lastName: GeralState["lastName"];
      }>
    ) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});
