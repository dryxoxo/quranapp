import React from 'react'

export const OptionSurat = (props) => {
    const { index, nomor, data, handleChangeSelect } = props

    return (
        <option key={index} value={nomor} onChange={()=>handleChangeSelect(nomor)}>{data}</option>
    )
}
