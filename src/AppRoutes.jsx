import React from 'react'
import Hero from './pages/hero'
import { Route, BrowserRouter as Router ,Routes} from 'react-router-dom'
import NotFound from './pages/NotFound'
import MainLayout from './layout/MainLayout'
import Project from './pages/Project'
import Blog from './pages/Blog'

function AppRoutes() {
  return (
    <Router>
        <Routes>
           <Route path='/' element={<MainLayout/>}>
                <Route index element={<Hero/>}  />
                <Route path='project' element={<Project/>}/>
                <Route path='blog' element={<Blog/>}/>
                <Route path='*' element={<NotFound/>}/>
           </Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes