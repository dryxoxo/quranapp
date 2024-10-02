import React from 'react'
import { NavDetail } from './components/NavDetail'
import { DaftarSuratPages } from './pages/DaftarSuratPages'
import { Layout } from './components/Layout'
import { DetailSurat } from './components/DetailSurat'

function App() {

  return (
    <div className="bg-darkBlue min-h-screen w-full">
      <NavDetail />
      <DetailSurat />
    </div>
  )
}

export default App
