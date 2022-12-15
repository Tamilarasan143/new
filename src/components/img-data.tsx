import React from 'react'
import Footer from './footer'
import Header from './header'
import WSPGallery from "./img-gallery"
import spa1 from '../assets/images/Spa/spa1.jpeg'
import spa2 from '../assets/images/Spa/spa2.jpeg'
import spa3 from '../assets/images/Spa/spa4.jpeg'
import spa4 from '../assets/images/Spa/spa5.jpeg'
import spa5 from '../assets/images/Spa/spa6.jpeg'
import spa6 from '../assets/images/Spa/spa7.jpeg'


export default function Imgdata() {
    const galleryImages = [
        {
          img:spa1
        },
        {
          img:spa2 
        },
        {
          img:spa3
        },
        {
          img:spa4
        },
        {
          img:spa5 
        },
        {
          img:spa6
        }
      ]
  return (
    <div>
        
        <WSPGallery galleryImages={galleryImages}/>
        <Footer/>
    </div>
  )
}
