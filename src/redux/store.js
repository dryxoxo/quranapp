import { configureStore } from "@reduxjs/toolkit";
import suratSlice from "./slice/surat"
import detailSurat from "./slice/detailSurat"
import tafsir from "./slice/tafsir";

const store = configureStore({
    reducer: {
        dataSurat: suratSlice,
        detailSurat: detailSurat,
        tafsirSurat: tafsir
    }
})

export default store