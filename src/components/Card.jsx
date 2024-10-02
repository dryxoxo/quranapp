import React from 'react'

export const Card = (props) => {
    const { nama, namaLatin, arti, jumlahAyat, nomor, handleClickSurat } = props

    return (
        <div className="card bg-[#1E293B] text-neutral-content w-full max-h-20 min-h-20 rounded-lg cursor-pointer hover:border-blue-100 hover:border" onClick={()=>handleClickSurat(nomor)}>
            <div className="flex w-full h-full items-center">
                <div id="noSurat" className='w-14 flex justify-center'>
                    <p className='font-semibold text-[#E7E9ED]'>{nomor}</p>
                </div>
                <div id="namaSurat" className='flex flex-col'>
                    <p className='font-semibold text-[#E7E9ED]'>{namaLatin}</p>
                    <p className='font-semibold text-[#B7C3D1] text-xs'>{arti}</p>
                </div>
                <div id="namaLatin" className='ml-auto flex flex-col pr-4'>
                    <p className='font-semibold text-[#E7E9ED]'>{nama}</p>
                    <p className='font-semibold text-[#B7C3D1] text-xs'>{jumlahAyat} Ayat</p>
                </div>
            </div>
        </div>
    )
}
