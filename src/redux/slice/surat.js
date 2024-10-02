import { createSlice } from '@reduxjs/toolkit'
import { fetchAllSurat } from '../thunk';


const initialState = {
    data: [],
    loading: false,
    error: null
}

const suratSlice = createSlice({
    name: 'suratSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllSurat.pending, (state, actions) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchAllSurat.fulfilled, (state, actions) => {
                state.loading = false;
                state.data = actions.payload.data
            })
            .addCase(fetchAllSurat.rejected, (state, actions) => {
                state.loading = false;
                state.error = actions.error.message;
            })
    }
});

export const { } = suratSlice.actions
export default suratSlice.reducer