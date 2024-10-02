import React from 'react'
import bookmarkFill from './../assets/bookmark-fill.svg'
import bookmarkOutline from './../assets/bookmark-outline.svg'
import info from './../assets/info.svg'

export const CardAyat = (props) => {

    const { nomorAyat, teksArab, teksLatin, teksIndonesia } = props

    return (
        <React.Fragment>
            <div className="card rounded-box grid h-fit place-items-center mt-4">
                <div className="flex flex-col justify-between w-full mb-4 px-4 gap-1">
                    <div className="flex justify-between pr-4 pb-4">
                        <p>{nomorAyat}</p>
                        <div className="flex w-5 h-5">
                            <img src={bookmarkFill} alt="" className='object-contain' />
                            <img src={info} alt="" className='object-contain' />
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
