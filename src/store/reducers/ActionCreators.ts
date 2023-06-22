import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkApi) => {
        try {
          const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users12333333333333333333333333333333333');
          return response.data;
        } catch (error) {
          return thunkApi.rejectWithValue('Error fetch')
        }
      }
)



// export const fetchUsers = () => async (dispatch: AppDispatch) => {
// try {
//     dispatch(userSlice.actions.usersFetching())
//     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data))
// } catch (error:any) {
//     dispatch(userSlice.actions.usersFetchingError(error.message))
// }
// }