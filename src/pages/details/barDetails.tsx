import React from "react";
import ImageGallery from 'react-image-gallery';
import bar1 from '../../assets/images/bar/bar1.jpeg'
import bar2 from '../../assets/images/bar/bar2.jpeg'
import bar3 from '../../assets/images/bar/bar3.jpeg'
import bar4 from '../../assets/images/bar/bar4.jpeg'
import bar5 from '../../assets/images/bar/bar5.jpeg'
import bar6 from '../../assets/images/bar/bar6.jpeg'
import bar7 from '../../assets/images/bar/bar1.jpeg'
import bar8 from '../../assets/images/bar/bar2.jpeg'
import bar9 from '../../assets/images/bar/bar3.jpeg'
import bar10 from '../../assets/images/bar/bar4.jpeg'


const images = [
    {
        original: bar1,
        thumbnail: bar1,
    },
    {
        original: bar2,
        thumbnail: bar2,
    },
    {
        original: bar3,
        thumbnail: bar3,
    },
    {
        original: bar4,
        thumbnail: bar4,
    },
    {
        original: bar5,
        thumbnail: bar5,
    },
    {
        original: bar6,
        thumbnail: bar6,
    },
    {
        original: bar7,
        thumbnail: bar7,
    },
    {
        original: bar8,
        thumbnail: bar8,
    },
    {
        original: bar9,
        thumbnail: bar9,
    },
    {
        original: bar10,
        thumbnail: bar10,
    },
]

export default function BarDetails(){
    return (
             <div><h3>Our Beautiful Bar and Restaurant view images</h3>
             <div><ImageGallery items={images} /> </div>
             </div>
    )
}