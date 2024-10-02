import { createBrowserRouter } from "react-router-dom";
import { DaftarSuratPages } from "./pages/DaftarSuratPages";
import { DetailSuratPages } from "./pages/DetailSuratPages";
import { getSurat } from "./api/quran";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DaftarSuratPages/>
    },
    {
        path: "/detailsurat/:nomor",
        element: <DetailSuratPages/>
    }
])