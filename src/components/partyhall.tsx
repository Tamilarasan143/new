import React from "react";
import ImageGallery from 'react-image-gallery';


const images = [
    {
        original: 'https://media.istockphoto.com/id/1164324498/photo/florist-finishing-their-part-of-job-for-wedding-in-banquet-hall.webp?s=612x612&w=0&k=20&c=LNYZjVEZe9GFsYaWFKB8y5_lGr085c2UXOUOutcu7aE=',
        thumbnail: 'https://media.istockphoto.com/id/1164324498/photo/florist-finishing-their-part-of-job-for-wedding-in-banquet-hall.webp?s=612x612&w=0&k=20&c=LNYZjVEZe9GFsYaWFKB8y5_lGr085c2UXOUOutcu7aE=',
    },
    {
        original: 'https://media.istockphoto.com/id/579765738/photo/wedding-hall-or-other-function-facility-set-for-fine-dining.webp?s=612x612&w=0&k=20&c=Wd5tNx_523_dOAxZij2knshTgwGeIJO3uRTnBoFm3sI=',
        thumbnail: 'https://media.istockphoto.com/id/579765738/photo/wedding-hall-or-other-function-facility-set-for-fine-dining.webp?s=612x612&w=0&k=20&c=Wd5tNx_523_dOAxZij2knshTgwGeIJO3uRTnBoFm3sI=',
    },
    {
        original: 'https://media.istockphoto.com/id/1390244823/photo/table-setting-for-an-event.webp?s=612x612&w=0&k=20&c=hw-_IoRxQGCr8YWWW6LyN1XjH9RMTsepv9sVhU-V1QY=',
        thumbnail: 'https://media.istockphoto.com/id/1390244823/photo/table-setting-for-an-event.webp?s=612x612&w=0&k=20&c=hw-_IoRxQGCr8YWWW6LyN1XjH9RMTsepv9sVhU-V1QY=',
    },
    {
        original: 'https://media.istockphoto.com/id/579766132/photo/wedding-hall-or-other-function-facility-set-for-fine-dining.webp?s=612x612&w=0&k=20&c=2YeRepFL--VGvkh5usRuQysW3-p0ksgxRXebDX94vPE=',
        thumbnail: 'https://media.istockphoto.com/id/579766132/photo/wedding-hall-or-other-function-facility-set-for-fine-dining.webp?s=612x612&w=0&k=20&c=2YeRepFL--VGvkh5usRuQysW3-p0ksgxRXebDX94vPE=',
    },
    {
        original: 'https://media.istockphoto.com/id/1164324214/photo/rear-view-of-woman-arranging-floral-decorations-for-wedding-ceremony.webp?s=612x612&w=0&k=20&c=bWBK1-w1e-j4eC2cEMIfD3-mkrQIPVVEzM7u0ul48rE=',
        thumbnail: 'https://media.istockphoto.com/id/1164324214/photo/rear-view-of-woman-arranging-floral-decorations-for-wedding-ceremony.webp?s=612x612&w=0&k=20&c=bWBK1-w1e-j4eC2cEMIfD3-mkrQIPVVEzM7u0ul48rE=',
    },
    {
        original: 'https://media.istockphoto.com/id/1203658237/photo/wedding-reception-dining-table-decoration-in-banquet-hall.webp?s=612x612&w=0&k=20&c=nU2BgjCh90X3_cLQ0TlIzTTyH38UsFGWvrim5dvuhlI=',
        thumbnail: 'https://media.istockphoto.com/id/1203658237/photo/wedding-reception-dining-table-decoration-in-banquet-hall.webp?s=612x612&w=0&k=20&c=nU2BgjCh90X3_cLQ0TlIzTTyH38UsFGWvrim5dvuhlI=',
    },
    {
        original: 'https://media.istockphoto.com/id/1355265016/photo/beautiful-banquet-hall-under-a-tent-for-a-wedding-reception.webp?s=612x612&w=0&k=20&c=cF30JnAstZM6miUVJb3pln_N2m5lvVyWkrjCnxmfGjA=',
        thumbnail: 'https://media.istockphoto.com/id/1355265016/photo/beautiful-banquet-hall-under-a-tent-for-a-wedding-reception.webp?s=612x612&w=0&k=20&c=cF30JnAstZM6miUVJb3pln_N2m5lvVyWkrjCnxmfGjA=',
    },
    {
        original: 'https://media.istockphoto.com/id/1303929705/photo/transparent-stylish-plastic-chairs.webp?s=612x612&w=0&k=20&c=EY5esTdkDp38qXDYZEB_ZqhToKoSRRtueCjJLB3Ty9o=',
        thumbnail: 'https://media.istockphoto.com/id/1303929705/photo/transparent-stylish-plastic-chairs.webp?s=612x612&w=0&k=20&c=EY5esTdkDp38qXDYZEB_ZqhToKoSRRtueCjJLB3Ty9o=',
    },
    {
        original: 'https://media.istockphoto.com/id/1164324221/photo/bride-and-groom-table-set-for-wedding-reception.webp?s=612x612&w=0&k=20&c=3yMTIyuOYNT3TNImKOQK2ypFRQUc_mmeXVVP26Z5cik=',
        thumbnail: 'https://media.istockphoto.com/id/1164324221/photo/bride-and-groom-table-set-for-wedding-reception.webp?s=612x612&w=0&k=20&c=3yMTIyuOYNT3TNImKOQK2ypFRQUc_mmeXVVP26Z5cik=',
    },
    {
        original: 'https://media.istockphoto.com/id/495672331/photo/banquet-hall-with-colorful-lights.webp?s=612x612&w=0&k=20&c=SnxhhpXIWLYPXn55tztKfeJhJ_EgjWAqf110nzVHxqE=',
        thumbnail: 'https://media.istockphoto.com/id/495672331/photo/banquet-hall-with-colorful-lights.webp?s=612x612&w=0&k=20&c=SnxhhpXIWLYPXn55tztKfeJhJ_EgjWAqf110nzVHxqE=',
    },
]

export default function Partyhall(){
     return (
         <div><ImageGallery items={images} /> </div>
    )
}