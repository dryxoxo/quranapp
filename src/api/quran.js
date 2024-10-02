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
