import axios from "./axios";

export const getAllSurat = async () => {
    try {
        const { data } = await axios.get('surat');
        return data
    } catch (error) {
        console.error(error);
    }
}

export const getSurat = async (nomor) => {
    try {
        const { data } = await axios.get(`surat/${nomor}`);  // Gunakan nomor yang dinamis dari URL
        return data;
    } catch (error) {
        console.error(error);
        throw new Response("Failed to fetch surat", { status: 500 });
    }
};

export const getTafsir = async (nomor) => {
    try {
        const { data } = await axios.get(`/tafsir/${nomor}`)
        return data
    } catch (error) {
        console.error(error)
        throw new Error("failed to fetch tafsir", { status: 500 });
    }
}
