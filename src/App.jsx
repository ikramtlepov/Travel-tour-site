import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Tours from './pages/Tours'
import Destination from './pages/Destination'
import NotFount from './components/pageComp/NotFount'
import Home from './pages/Home'
import TourDetail from './components/TourDetail'
import Registration from './pages/Registration'
import BookNow from './components/BookNow'
import { AuthProvider } from './components/pageComp/AuthContext'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/tours/:slug' element={<TourDetail/>}/>
        <Route path='/booknow' element={<BookNow/>}/>
        <Route path='/registration' element={<Registration/>}/>

        <Route path='/*' element={<NotFount/>}/>


        
      </Route>
    )
  )
  return (
    <AuthProvider> {/* Оборачиваем маршрутизатор в AuthProvider */}
    <RouterProvider router={router} />
  </AuthProvider>
  )
}

export default App