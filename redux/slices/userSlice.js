import getFetch from './../../utils/getFetch';
import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"
import { getCookies } from 'cookies-next';
import { BASE_API } from './../../api/index';


// First, create the thunk
export const fetchUserHeader = createAsyncThunk(
    'user-header',
    async (userId, thunkAPI) => {
        let url;
        let headers = {
            "ath-token": getCookies("token").token,
        };

        getCookies("token").token ?
            (url = `${BASE_API}/get-user-header`) :
            (url = `${BASE_API}/get-header`);

        let res = await getFetch(true, url, headers);
        return res.data;
    }
);

const userSlice = createSlice({
    name: 'user-slice',
    initialState: {
        pending: false,
        userDetails: ''
    },
    extraReducers: {
        [fetchUserHeader.pending]: (state, action) => {
            state.pending = true;
            state.userDetails = '';
        },
        [fetchUserHeader.fulfilled]: (state, action) => {
            state.pending = false;
            state.userDetails = action.payload;
        },
        [fetchUserHeader.rejected]: (state, action) => {
            state.pending = false;
            state.userDetails = '';
        }
    
    }
});

export default userSlice.reducer;