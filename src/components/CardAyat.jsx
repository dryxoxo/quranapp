import React, { useEffect } from 'react'
import bookmarkFill from './../assets/bookmark-fill.svg'
import bookmarkOutline from './../assets/bookmark-outline.svg'
import info from './../assets/info.svg'
import { useSelector } from 'react-redux'
import { ModalTafsir } from './ModalTafsir'

export const CardAyat = (props) => {

    const { nomorAyat, teksArab, teksLatin, teksIndonesia, handleTafsirAyat } = props
    const { findTafsirData, dataTafsir } = useSelector(state => state.tafsirSurat)

    return (
        <React.Fragment>
            <div className="card rounded-box grid h-fit place-items-center mt-4">
                <div className="flex flex-col justify-between w-full mb-4 px-4 gap-1">
                    <div className="flex justify-between pr-4 pb-4">
                        <p>{nomorAyat}</p>
                        <div className="flex gap-1">
                            <div className="flex w-[25px] h-fit">
                                <img src={bookmarkOutline} alt="" className='object-contain' />
                            </div>
                            <div className="flex cursor-pointer w-fit h-fit" onClick={() => handleTafsirAyat(nomorAyat)}>
                                <div className="flex w-[25px] h-fit mr-1">
                                    <img src={info} alt="" className='object-contain' />
                                </div>
                                <ModalTafsir namaLatin={`${findTafsirData.ayat} Surat ${dataTafsir?.namaLatin}`} deskripsi={findTafsirData.teks} title={`Tafsir Ayat `} id={`ayat-${nomorAyat}`} />
                            </div>
                        </div>
                    </div>
                    <p className='font-semibold text-3xl font-serif text-end'>{teksArab}</p>
                </div>
                <div className="flex flex-col w-full px-4 gap-1">
                    <p className='italic font-semibold'>{teksLatin}</p>
                    <p>{teksIndonesia}</p>
                </div>
            </div>
            <div className="divider"></div>
        </React.Fragment>
    )
}
