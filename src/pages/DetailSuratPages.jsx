import React from 'react'
import { Layout } from '../components/Layout'
import { NavDetail } from '../components/NavDetail'
import { DetailSurat } from '../components/DetailSurat'

export const DetailSuratPages = () => {
  return (

    <Layout>
        <NavDetail/>
        <DetailSurat/>
    </Layout>
  )
}
