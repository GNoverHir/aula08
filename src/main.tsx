import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header/index.tsx'
import SearchBar from './Components/SearchBar/index.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Header/>
  <main>
    <SearchBar/>
  </main>
  </React.StrictMode>,
)
