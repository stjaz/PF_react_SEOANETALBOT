import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nosotros from './components/Nosotros'


const App = () => {
    return (
            <BrowserRouter>

                <NavBar />

                <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/item/:id" element={<ItemDetailContainer/>} />
                    <Route path="/productos/" element={<ItemListContainer/>} />
                    <Route path="/productos/:categoria" element={<ItemListContainer/>} />
                    <Route path="/nosotros" element={<Nosotros/>} />
                </Routes>



            </BrowserRouter>
    )
}

export default App