import { configureStore } from "@reduxjs/toolkit";
import suratSlice from "./slice/surat"
import detailSurat from "./slice/detailSurat"

const store = configureStore({
    reducer: {
        dataSurat: suratSlice,
        detailSurat: detailSurat
    }
})

export default store