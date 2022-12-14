import React from "react";
import ImageGallery from 'react-image-gallery';
import PH1 from '../assets/images/Party-Hall/party1.jpeg'
import PH2 from '../assets/images/Party-Hall/party2.jpeg'
import PH3 from '../assets/images/Party-Hall/party3.jpeg'
import PH4 from '../assets/images/Party-Hall/party4.jpeg'
import PH5 from '../assets/images/Party-Hall/party5.jpeg'
import PH6 from '../assets/images/Party-Hall/party6.jpeg'
import PH7 from '../assets/images/Party-Hall/party7.jpeg'
import PH8 from '../assets/images/Party-Hall/party8.jpeg'
import PH9 from '../assets/images/Party-Hall/party2.jpeg'
import PH10 from '../assets/images/Party-Hall/party1.jpeg'



const images = [
    {
        original:PH1 ,
        thumbnail: PH1,
    },
    {
        original:PH2,
        thumbnail:PH2,
    },
    {
        original:PH3,
        thumbnail:PH3,
    },
    {
        original:PH4,
        thumbnail:PH4,
    },
    {
        original:PH5,
        thumbnail:PH5,
    },
    {
        original:PH6,
        thumbnail:PH6,
    },
    {
        original:PH7,
        thumbnail:PH7,
    },
    {
        original:PH8,
        thumbnail:PH8,
    },
    {
        original:PH9,
        thumbnail:PH9,
    },
    {
        original:PH10,
        thumbnail:PH10,
    },
]

export default function Partyhall(){
    return (
         <div><ImageGallery items={images} /> </div>
    )
}