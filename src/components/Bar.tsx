import React from "react";
import ImageGallery from 'react-image-gallery';


const images = [
    {
        original: 'https://media.istockphoto.com/id/803432538/photo/happy-business-owner-working-at-a-restaurant.webp?s=612x612&w=0&k=20&c=AEgPAHU5vcQmlmesTtoVIIOGI-kfHXTR4-FxvQV1xCA=',
        thumbnail: 'https://media.istockphoto.com/id/803432538/photo/happy-business-owner-working-at-a-restaurant.webp?s=612x612&w=0&k=20&c=AEgPAHU5vcQmlmesTtoVIIOGI-kfHXTR4-FxvQV1xCA=',
    },
    {
        original: 'https://media.istockphoto.com/id/1178591496/photo/view-through-the-window-of-staff-and-customers-inside-buns-and-buns-restaurant-in-covent.webp?s=612x612&w=0&k=20&c=cb7tKh_cgCx1urxBdQWq6lCc6Oc_XcMCxdgkRaTNgsc=',
        thumbnail: 'https://media.istockphoto.com/id/1178591496/photo/view-through-the-window-of-staff-and-customers-inside-buns-and-buns-restaurant-in-covent.webp?s=612x612&w=0&k=20&c=cb7tKh_cgCx1urxBdQWq6lCc6Oc_XcMCxdgkRaTNgsc=',
    },
    {
        original: 'https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?b=1&s=170667a&w=0&k=20&c=Yoon5F8BQm8UBMWf4BlSLUS7L6Oq6XpeuuwqeilJ9Hc=',
        thumbnail: 'https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?b=1&s=170667a&w=0&k=20&c=Yoon5F8BQm8UBMWf4BlSLUS7L6Oq6XpeuuwqeilJ9Hc=',
    },
    {
        original: 'https://media.istockphoto.com/id/1159992039/photo/cozy-restaurant-for-gathering-with-friends.webp?s=612x612&w=0&k=20&c=FTnWMb2J9lI7M6Q06xlCDBwDq291PbNeU_YwcnzH9f0=',
        thumbnail: 'https://media.istockphoto.com/id/1159992039/photo/cozy-restaurant-for-gathering-with-friends.webp?s=612x612&w=0&k=20&c=FTnWMb2J9lI7M6Q06xlCDBwDq291PbNeU_YwcnzH9f0=',
    },
    {
        original: 'https://media.istockphoto.com/id/624494724/photo/empty-wooden-bar-counter.webp?s=612x612&w=0&k=20&c=FdTfgMT6A381px5HbG6GGKrtduFVUuAdCGBlVX36J5w=',
        thumbnail: 'https://media.istockphoto.com/id/624494724/photo/empty-wooden-bar-counter.webp?s=612x612&w=0&k=20&c=FdTfgMT6A381px5HbG6GGKrtduFVUuAdCGBlVX36J5w=',
    },
    {
        original: 'https://media.istockphoto.com/id/1221884267/photo/modern-empty-cafe-or-night-club-closed-down-during-pandemic-lockdown.webp?s=612x612&w=0&k=20&c=CMNQuNsrzWIB6XwytLHHPFMq4lXsziVMgKWeftZdKtM=',
        thumbnail: 'https://media.istockphoto.com/id/1221884267/photo/modern-empty-cafe-or-night-club-closed-down-during-pandemic-lockdown.webp?s=612x612&w=0&k=20&c=CMNQuNsrzWIB6XwytLHHPFMq4lXsziVMgKWeftZdKtM=',
    },
    {
        original: 'https://media.istockphoto.com/id/962573364/photo/group-of-happy-friends-drinking-and-toasting-beer-at-brewery-bar-restaurant-friendship-concept.webp?s=612x612&w=0&k=20&c=i3TmTIysQ_GMW7z26RFr2C2ErXno6FGC7jbqbikce_k=',
        thumbnail: 'https://media.istockphoto.com/id/962573364/photo/group-of-happy-friends-drinking-and-toasting-beer-at-brewery-bar-restaurant-friendship-concept.webp?s=612x612&w=0&k=20&c=i3TmTIysQ_GMW7z26RFr2C2ErXno6FGC7jbqbikce_k=',
    },
    {
        original: 'https://media.istockphoto.com/id/1221884267/photo/modern-empty-cafe-or-night-club-closed-down-during-pandemic-lockdown.webp?s=612x612&w=0&k=20&c=CMNQuNsrzWIB6XwytLHHPFMq4lXsziVMgKWeftZdKtM=',
        thumbnail: 'https://media.istockphoto.com/id/1221884267/photo/modern-empty-cafe-or-night-club-closed-down-during-pandemic-lockdown.webp?s=612x612&w=0&k=20&c=CMNQuNsrzWIB6XwytLHHPFMq4lXsziVMgKWeftZdKtM=',
    },
    {
        original: 'https://media.istockphoto.com/id/624494724/photo/empty-wooden-bar-counter.webp?s=612x612&w=0&k=20&c=FdTfgMT6A381px5HbG6GGKrtduFVUuAdCGBlVX36J5w=',
        thumbnail: 'https://media.istockphoto.com/id/624494724/photo/empty-wooden-bar-counter.webp?s=612x612&w=0&k=20&c=FdTfgMT6A381px5HbG6GGKrtduFVUuAdCGBlVX36J5w=',
    },
    {
        original: 'https://media.istockphoto.com/id/1148223648/photo/interior-of-a-pub.webp?s=612x612&w=0&k=20&c=ol9gdn-NQRREHUydQ2loU6WpCSeUTjt8qFGekYDvx0o=',
        thumbnail: 'https://media.istockphoto.com/id/1148223648/photo/interior-of-a-pub.webp?s=612x612&w=0&k=20&c=ol9gdn-NQRREHUydQ2loU6WpCSeUTjt8qFGekYDvx0o=',
    },
]

export default function Bar(){
     return (
         <div><ImageGallery items={images} /> </div>
    )
}