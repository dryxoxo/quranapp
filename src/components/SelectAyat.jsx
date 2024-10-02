import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OptionSurat } from './OptionSurat'
import { fetchDetailSurat } from '../redux/thunk'


export const SelectAyat = () => {
    const { data, loading, error } = useSelector(state => state.dataSurat)
    const dispatch = useDispatch()

    const handleChangeSelect = (event) => {
        const selectedValue = event.target.value
        dispatch(fetchDetailSurat(selectedValue))
    }

    return (
        <>
            <select className="select bg-[#0F172A] select-bordered select-sm w-fit max-w-xs hover:border" onChange={handleChangeSelect}>
                {data?.map((item, index) => (
                    <option key={index} value={item.nomor} onChange={() => handleChangeSelect(nomor)}>{item.namaLatin}</option>
                ))}
            </select>
        </>
    )
}
