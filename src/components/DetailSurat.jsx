import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetailTafsir, fetchDetailSurat, fetchAllSurat } from '../redux/thunk'
import { Spinner } from './Spinner'
import info from './../assets/info.svg'
import play from './../assets/play.svg'
import pause from './../assets/pause.svg'
import { ModalTafsir } from './ModalTafsir'
import { CardAyat } from './CardAyat'
import { findTafsir } from '../redux/slice/tafsir'

export const DetailSurat = () => {

    const dispatch = useDispatch()
    const audioRef = useRef(null);
    const { nomor } = useParams()
    const { data, loading, error } = useSelector(state => state.detailSurat)
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    
    const { findTafsirData, dataTafsir } = useSelector(state => state.tafsirSurat)

    const handleTafsirAyat = (nomor) => {
        dispatch(findTafsir({nomor}))

    }

    useEffect(() => {

    }, [findTafsirData]);

    const handlePlayAudio = () => {
        if (isPlaying) {
            // Jika sedang bermain, jeda audio
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            // Jika sedang tidak bermain, mulai putar audio
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    // Mengupdate waktu saat ini setiap kali audio diputar
    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    // Mengambil durasi total saat audio dimuat
    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    // Fungsi untuk mengubah detik ke format menit:detik
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    useEffect(() => {
        // Pause audio dan reset currentTime
        if (audioRef.current) {
            audioRef.current.pause();  // Pause audio
            audioRef.current.currentTime = 0;  // Reset ke awal
        }

        setCurrentTime(0)
        setIsPlaying(false);  // Reset isPlaying ke false
    }, [nomor]);


    useEffect(() => {
        dispatch(fetchAllSurat())
        dispatch(fetchDetailSurat(nomor))
        dispatch(fetchDetailTafsir(nomor))
    }, [dispatch, nomor])

    // Render spinner saat loading
    if (loading) {

        return <p>test</p>
    }

    // Render pesan error jika ada error
    if (error) {
        return <p>Error: {error}</p>
    }

    // Pastikan data sudah ada sebelum render
    if (!data || !data.ayat) {
        return <p>Data tidak ditemukan</p>
    }

    return (
        <div className="flex max-w-4xl flex-col mx-auto mt-24">
            <div className="flex flex-col items-center">
                <div className="flex w-full h-fit flex-col items-center mt-5">
                    <p className='text-5xl font-semibold font-serif'>{data.nama}</p>
                    <p className='text-xl'>{data.namaLatin}</p>
                    <p className='text-xl'>{data.arti}</p>
                </div>
                <div className="flex gap-3 my-4">
                    <div className="flex gap-1 hover:text-white cursor-pointer">
                        <div className="w-[25px] h-[25px]">
                            <img src={info} alt="" className='object-contain' />
                        </div>
                        <ModalTafsir namaLatin={data.namaLatin} deskripsi={data.deskripsi} title="Tentang Surat " id={`ayat-${data.nomor}`}/>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-1 hover:text-white cursor-pointer">
                        <div className="flex w-full h-fit justify-center">
                            <div className="w-[25px] h-[25px]">
                                {isPlaying ? <img src={pause} alt="" className='object-contain' /> : <img src={play} alt="" className='object-contain' />}
                            </div>
                            <p className="text-xs" onClick={handlePlayAudio}>{isPlaying ? "Jeda Audio" : "Putar Audio"}</p>
                        </div>
                        <p className='text-xs text-nowrap my-auto ml-7 lg:ml-1'>
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </p>
                        <audio ref={audioRef}
                            onTimeUpdate={handleTimeUpdate} // Update waktu saat audio diputar
                            onLoadedMetadata={handleLoadedMetadata} // Set durasi total saat audio dimuat
                            onEnded={() => setIsPlaying(false)}
                        >
                            <source src={Object.values(data.audioFull)[0]} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            </div>
            {data.ayat.map((item, index) => (
                <CardAyat key={index} nomorAyat={item.nomorAyat} teksArab={item.teksArab} teksLatin={item.teksLatin} teksIndonesia={item.teksIndonesia} handleTafsirAyat={handleTafsirAyat} />
            ))}
        </div>
    )
}
