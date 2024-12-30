import { Route,Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

import Home from "../Pages/Home"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Resume from "../Pages/Resume"
import OurWork from "../Pages/OurWork"

export default function AllRoutes(){

    return <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/ourwork" element={<OurWork/>}/>
            </Routes>
            <Footer/>
            
    </>
}