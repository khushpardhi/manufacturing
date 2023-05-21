import React from 'react'
import Navbar from '../componants/Navbar'
import Slider from '../componants/Slider'
import Footer from '../componants/Footer'
import ContactForm from '../componants/ContactForm'
const MainPage = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default MainPage