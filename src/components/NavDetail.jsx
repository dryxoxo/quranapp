import React, { useEffect } from 'react'
import arrowLeft from './../assets/arrow-left.svg'
import arrowLeftButton from './../assets/arrow-left-button.svg'
import arrowRightButton from './../assets/arrow-right-button.svg'
import setting from './../assets/setting.svg'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetailSurat } from '../redux/thunk'
import { Spinner } from './Spinner'
import { SelectAyat } from './SelectAyat'

export const NavDetail = () => {
    const { data, loading, error } = useSelector(state => state.detailSurat)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleNextButton = () => {
        if (data?.suratSelanjutnya?.nomor) {
            dispatch(fetchDetailSurat(data.suratSelanjutnya.nomor))
            navigate(`/detailSurat/${data.suratSelanjutnya.nomor}`);
        }
    }

    const handlePreviousButton = () => {
        if (data?.suratSebelumnya?.nomor) {
            dispatch(fetchDetailSurat(data.suratSebelumnya.nomor))
            navigate(`/detailSurat/${data.suratSebelumnya.nomor}`);
        }
    }

    const handleBackButton = () => {
        navigate('/')
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    if (!data) {
        return <p>Data tidak tersedia.</p>
    }

    return (
        <div className="flex w-full h-fit fixed top-0 left-0 right-0 z-40 backdrop-blur-3xl border-b border-gray-700 p-4 justify-center">
            <div className="flex w-11/12 justify-evenly">
                <div className="flex w-fit my-auto h-full items-center cursor-pointer hover:text-white" onClick={handleBackButton}>
                    <div className="h-[30px] w-[30px]">
                        <img src={arrowLeft} alt="" className='h-full w-full object-cover' />
                    </div>
                    <p className='font-semibold text-sm hidden lg:block'>Daftar Surat</p>
                </div>
                <div className="flex flex-col h-full my-auto gap-1 justify-center">
                    <div className="flex gap-1 mx-auto">
                        <button
                            className="bg-[#0F172A] rounded-l-lg pr-2 hover:border hover:text-white h-9"
                            onClick={handlePreviousButton}
                            disabled={!data?.suratSebelumnya}>
                            <div className="flex items-center">
                                <div className="w-[20px] h-[20px] my-auto">
                                    <img src={arrowLeftButton} alt="" className='h-full w-full object-cover' />
                                </div>
                                <p className='font-semibold text-xs my-auto'>{data?.suratSebelumnya?.namaLatin || 'N/A'}</p>
                            </div>
                        </button>
                        <button
                            className="bg-[#0F172A] rounded-r-lg pl-2 hover:border hover:text-white h-9"
                            onClick={handleNextButton}
                            disabled={!data?.suratSelanjutnya}>
                            <div className="flex items-center">
                                <p className='font-semibold text-xs my-auto'>{data?.suratSelanjutnya?.namaLatin || 'N/A'}</p>
                                <div className="w-[20px] h-[20px] my-auto">
                                    <img src={arrowRightButton} alt="" className='h-full w-full object-cover' />
                                </div>
                            </div>
                        </button>
                    </div>
                    <SelectAyat/>
                </div>
                <div className="flex w-fit my-auto h-full items-center">
                    <div className="h-[20px] w-[20px] me-1">
                        <img src={setting} alt="" className='h-full w-full object-cover' />
                    </div>
                    <p className='font-semibold text-sm hidden lg:block'>Bookmark</p>
                </div>
            </div>
        </div>
    )
}
