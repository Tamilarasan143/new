import React from "react";
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://media.gettyimages.com/id/1357705422/photo/luxury-spa-massage-room-interior-with-massage-tables-hot-tub-and-marble-floor.jpg?s=612x612&w=0&k=20&c=spSLgcy-iTCM5yDvI-3pxMnXyL91wjCm-7oBcGwZO6Q=',
        thumbnail: 'https://media.gettyimages.com/id/1357705422/photo/luxury-spa-massage-room-interior-with-massage-tables-hot-tub-and-marble-floor.jpg?s=612x612&w=0&k=20&c=spSLgcy-iTCM5yDvI-3pxMnXyL91wjCm-7oBcGwZO6Q=',
    },
    {
        original: 'https://media.gettyimages.com/id/1357705422/photo/luxury-spa-massage-room-interior-with-massage-tables-hot-tub-and-marble-floor.jpg?s=612x612&w=0&k=20&c=spSLgcy-iTCM5yDvI-3pxMnXyL91wjCm-7oBcGwZO6Q=',
        thumbnail: 'https://media.gettyimages.com/id/1357705422/photo/luxury-spa-massage-room-interior-with-massage-tables-hot-tub-and-marble-floor.jpg?s=612x612&w=0&k=20&c=spSLgcy-iTCM5yDvI-3pxMnXyL91wjCm-7oBcGwZO6Q=',
    },
    {
        original: 'https://media.gettyimages.com/id/173008987/photo/swimming-pool.jpg?s=612x612&w=0&k=20&c=iHUn3GSnsXp7gY6CMWd1UIouToj1xO_d2m7AEtEFqR0=',
        thumbnail: 'https://media.gettyimages.com/id/173008987/photo/swimming-pool.jpg?s=612x612&w=0&k=20&c=iHUn3GSnsXp7gY6CMWd1UIouToj1xO_d2m7AEtEFqR0=',
    },
    {
        original: 'https://media.gettyimages.com/id/1163010325/photo/indoor-swimming-pool.jpg?s=612x612&w=0&k=20&c=ynNH7hu5bDFm7NAnmHp3_MD7Fqie-2HbqIHUR9MaWh8=',
        thumbnail: 'https://media.gettyimages.com/id/1163010325/photo/indoor-swimming-pool.jpg?s=612x612&w=0&k=20&c=ynNH7hu5bDFm7NAnmHp3_MD7Fqie-2HbqIHUR9MaWh8=',
    },
    {
        original: 'https://media.gettyimages.com/id/1125655170/photo/man-in-bathrobe-resting-in-lounge-chair-in-relaxation-room-of-a-spa.jpg?s=612x612&w=0&k=20&c=JZHJexbhSrL5_EhvxQvYBaWvh6FgxtRkjbYo8zK4rRU=',
        thumbnail: 'https://media.gettyimages.com/id/1125655170/photo/man-in-bathrobe-resting-in-lounge-chair-in-relaxation-room-of-a-spa.jpg?s=612x612&w=0&k=20&c=JZHJexbhSrL5_EhvxQvYBaWvh6FgxtRkjbYo8zK4rRU=',
    },
    {
        original: 'https://media.gettyimages.com/id/512968467/photo/therapist-giving-shoulder-massage-to-customer.jpg?s=612x612&w=0&k=20&c=QzgV0NKhqXGG0eSNPij6GuTqYqR0NuYM2_TK8qKG0ME=',
        thumbnail: 'https://media.gettyimages.com/id/512968467/photo/therapist-giving-shoulder-massage-to-customer.jpg?s=612x612&w=0&k=20&c=QzgV0NKhqXGG0eSNPij6GuTqYqR0NuYM2_TK8qKG0ME=',
    },
    {
        original: 'https://media.gettyimages.com/id/1065865888/photo/sauna-with-snowy-mountain-view.jpg?s=612x612&w=0&k=20&c=fo7FCMvwx1uHXCudJrLXZjrsreOAAk02QqgoFdsyZSQ=',
        thumbnail: 'https://media.gettyimages.com/id/1065865888/photo/sauna-with-snowy-mountain-view.jpg?s=612x612&w=0&k=20&c=fo7FCMvwx1uHXCudJrLXZjrsreOAAk02QqgoFdsyZSQ=',
    },
    {
        original: 'https://media.gettyimages.com/id/121530109/photo/hot-tub-and-swimming-pool-in-hotel.jpg?s=612x612&w=0&k=20&c=lTgRz52FJhZ3gKmqzVjxjqaxtrqvd81NbhzIe6KKBXU=',
        thumbnail: 'https://media.gettyimages.com/id/121530109/photo/hot-tub-and-swimming-pool-in-hotel.jpg?s=612x612&w=0&k=20&c=lTgRz52FJhZ3gKmqzVjxjqaxtrqvd81NbhzIe6KKBXU=',
    },
    {
        original: 'https://media.gettyimages.com/id/532843972/photo/provencal-holiday-house.jpg?s=612x612&w=0&k=20&c=IFs8-DTV5j3djLUrJKONR8WXekvEZPcMdlnLP2iOk30=',
        thumbnail: 'https://media.gettyimages.com/id/532843972/photo/provencal-holiday-house.jpg?s=612x612&w=0&k=20&c=IFs8-DTV5j3djLUrJKONR8WXekvEZPcMdlnLP2iOk30=',
    },
    {
        original: 'https://media.gettyimages.com/id/1231767308/photo/the-site-of-gold-spa-is-viewed-on-march-17-one-of-the-three-asian-massage-parlors-that-was.jpg?s=612x612&w=0&k=20&c=F0QFtk4roM432lRD3E-OS6urzrMSOgLF_iVFkR94cLc=',
        thumbnail: 'https://media.gettyimages.com/id/1231767308/photo/the-site-of-gold-spa-is-viewed-on-march-17-one-of-the-three-asian-massage-parlors-that-was.jpg?s=612x612&w=0&k=20&c=F0QFtk4roM432lRD3E-OS6urzrMSOgLF_iVFkR94cLc=',
    },
]

    export default function Spa(){
         return (
             
             <div><ImageGallery items={images} /> </div>
        )
}