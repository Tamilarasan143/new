import React from 'react';
import ImageGallery from 'react-image-gallery';
import img7 from './OIP.jpg'

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'http://tulipsresorthisar.com/images/banquets_3.jpg',
        thumbnail: 'http://tulipsresorthisar.com/images/banquets_3.jpg',
    },
    {
        original: img7,
        thumbnail: img7,
    },
];
export default function Imggallery() {
    return (
        <div><ImageGallery items={images} /> </div>
    )
}
