import React from 'react'
import { Layout } from '../components/Layout'
import { Search } from '../components/Search'
import { DaftarSurat } from '../fragments/DaftarSurat'

export const DaftarSuratPages = () => {
    return (
        <Layout>
            {/* <Search /> */}
            <DaftarSurat />
        </Layout>
    )
}
