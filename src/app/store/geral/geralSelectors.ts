import { RootState } from '../store';

export const selectFirstName = (state: RootState) => state.app.firstName;
export const selectLastName = (state: RootState) => state.app.lastName;
