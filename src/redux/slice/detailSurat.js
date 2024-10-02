import { createSlice } from '@reduxjs/toolkit'
import { fetchDetailSurat } from '../thunk';

const initialState = {
    data: [],
    loading: false,
    error: null

}

const detailSurat = createSlice({
    name: 'detailSurat',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDetailSurat.pending, (state, actions) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchDetailSurat.fulfilled, (state, actions) => {
                state.data = actions.payload.data;
                state.loading = false;
            })
            .addCase(fetchDetailSurat.rejected, (state, actions) => {
                state.loading = false;
                state.error = actions.error.message;
            })
    }
});

export const { } = detailSurat.actions

export default detailSurat.reducer