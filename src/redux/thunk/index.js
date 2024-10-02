import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllSurat, getSurat } from "../../api/quran";

export const fetchAllSurat = createAsyncThunk(
    'suratSlice/fetchAllSurat', async () => {
        const data = await getAllSurat()
        return data
    }
)

export const fetchDetailSurat = createAsyncThunk(
    'detailSurat/fetchDetailSurat', async (nomor) => {
        const data = await getSurat(nomor)
        return data
    }
)

