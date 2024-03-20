import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header/index.tsx'
import SearchBar from './Components/SearchBar/index.tsx'
import './index.css'
import Carroussel from './Components/Carroussel/Index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Header/>
  <main>
    <SearchBar/>
    <Carroussel/>
  </main>
  </React.StrictMode>,
)
