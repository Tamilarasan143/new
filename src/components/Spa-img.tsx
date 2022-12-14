import React from "react";
import ImageGallery from 'react-image-gallery';
import spa1 from '../assets/images/Spa/spa1.jpeg'
import spa2 from '../assets/images/Spa/spa2.jpeg'
import spa3 from '../assets/images/Spa/spa1.jpeg'
import spa4 from '../assets/images/Spa/spa4.jpeg'
import spa5 from '../assets/images/Spa/spa5.jpeg'
import spa6 from '../assets/images/Spa/spa6.jpeg'
import spa7 from '../assets/images/Spa/spa7.jpeg'
import spa8 from '../assets/images/Spa/spa2.jpeg'
import spa9 from '../assets/images/Spa/spa6.jpeg'
import spa10 from '../assets/images/Spa/spa4.jpeg'

const images = [
    {
        original:spa1,
        thumbnail:spa1,
    },
    {
        original:spa2,
        thumbnail:spa2,
    },
    {
        original:spa3,
        thumbnail:spa3,
    },
    {
        original:spa4,
        thumbnail:spa4,
    },
    {
        original:spa5,
        thumbnail:spa5,
    },
    {
        original:spa6,
        thumbnail:spa6,
    },
    {
        original:spa7,
        thumbnail:spa7,
    },
    {
        original:spa8,
        thumbnail:spa8,
    },
    {
        original:spa9,
        thumbnail:spa9,
    },
    {
        original:spa10,
        thumbnail:spa10,
    },
]

    export default function Spa(){
        return (
             
             <div><ImageGallery items={images} /> </div>
        )
}