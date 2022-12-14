import React from 'react';
import ImageGallery from 'react-image-gallery';
import img7 from './OIP.jpg'

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://images.unsplash.com/photo-1536754821162-59d3e0fb7243?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJhciUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        thumbnail: 'https://images.unsplash.com/photo-1536754821162-59d3e0fb7243?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJhciUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
        original: 'https://thumbs.dreamstime.com/b/restaurant-bar-stools-desk-shelves-alcohol-behind-93119018.jpg',
        thumbnail: 'https://thumbs.dreamstime.com/b/restaurant-bar-stools-desk-shelves-alcohol-behind-93119018.jpg',
    },
    {
        original: 'https://thumbs.dreamstime.com/b/five-colorful-gin-tonic-cocktails-wine-glasses-bar-counter-pup-restaurant-111478962.jpg',
        thumbnail: 'https://thumbs.dreamstime.com/b/five-colorful-gin-tonic-cocktails-wine-glasses-bar-counter-pup-restaurant-111478962.jpg',
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
