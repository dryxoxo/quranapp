import { createSlice } from '@reduxjs/toolkit';
import { fetchDetailTafsir } from '../thunk';

const initialState = {
    dataTafsir: null, // Set initial value to null or an empty array
    findTafsirData: {},
    loading: false,
    error: null
};

const tafsirSlice = createSlice({
    name: 'tafsir',
    initialState,
    reducers: {
        findTafsir: (state, action) => {
            const { nomor } = action.payload;
            // Cek apakah dataTafsir sudah ada dan cari ayat
            const result = state.dataTafsir.tafsir.find(item => item.ayat === nomor);
            state.findTafsirData = result || {}; // Atur result atau objek kosong jika tidak ditemukan
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetailTafsir.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDetailTafsir.fulfilled, (state, action) => {
                // Asumsikan action.payload.data adalah objek dengan properti 'tafsir'
                state.dataTafsir = action.payload.data || []; // Atur dataTafsir dengan hasil fetch
                state.loading = false;
            })
            .addCase(fetchDetailTafsir.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { findTafsir } = tafsirSlice.actions;

export default tafsirSlice.reducer;
