import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Error from './pages/Error'
import Offer from './pages/Offer'
import StoreDetail from './pages/StoreDetail'

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='/offer' element={<Offer />} />
            <Route path='storen/:storeId' element={<StoreDetail/>} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default Router