import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllSurat, getSurat, getTafsir } from "../../api/quran";

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

export const fetchDetailTafsir = createAsyncThunk(
    'tafsir/fetchDetailTafsir', async (nomor) => {
        const data = await getTafsir(nomor)
        return data
    }
)
