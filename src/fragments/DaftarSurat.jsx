import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { getAllSurat } from '../api/quran'
import { Spinner } from '../components/Spinner'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSurat } from '../redux/thunk'
import { Search } from '../components/Search'

export const DaftarSurat = () => {

    const { data, loading, error } = useSelector(state => state.dataSurat)
    const [textSearch, setTextSearch] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClickSurat = (nomor) => {
        navigate(`/detailSurat/${nomor}`)
    }

    const handleSearch = (event) => {
        setTextSearch(event.target.value)
    }

    const filteredData = textSearch
        ? data.filter(item => item.namaLatin.toLowerCase().includes(textSearch.toLowerCase()))
        : data;

    useEffect(() => {
        dispatch(fetchAllSurat())
    }, [])

    if (loading) return <Spinner />
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Search handleSearch={handleSearch} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-4 w-full mx-auto mt-20">
                {filteredData.map((item, index) => (
                    <Card key={index} nama={item.nama} namaLatin={item.namaLatin} arti={item.arti} jumlahAyat={item.jumlahAyat} nomor={item.nomor} handleClickSurat={handleClickSurat} />
                ))}
            </div>
        </>

    )
}
