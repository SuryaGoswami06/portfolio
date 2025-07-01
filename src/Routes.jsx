import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App'
import Layout from './layout/layout'
import Projects from './pages/projects'

function AppRoutes() {
  return (
    <BrowserRouter basename='/portfolio'>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<App/>} />
            <Route path='/projects' element={<Projects/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes