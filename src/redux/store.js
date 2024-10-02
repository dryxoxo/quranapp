import { configureStore } from "@reduxjs/toolkit";
import suratSlice from "./slice/Surat"
import detailSurat from "./slice/detailSurat"

const store = configureStore({
    reducer: {
        dataSurat: suratSlice,
        detailSurat: detailSurat
    }
})

export default store