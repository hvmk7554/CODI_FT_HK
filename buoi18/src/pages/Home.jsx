import React from 'react'
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';

function Home() {
    const image1='https://shopdunk.com/images/uploaded/banner/thang%209%202023/banner_iphone_15_3_PC_coc.jpg';
    const image2='https://shopdunk.com/images/uploaded/banner/thang%209%202023/banner%20ipad%20gen9%20T9_Banner%20PC.jpg';
    const image3='https://shopdunk.com/images/uploaded/banner/thang%209%202023/banner%20macbook%20air%20t9_Banner%20PC.jpg';
    const categories = [
      'Phones',
      'Tablest',
      'PC',
      'Laptop',
    ]
    return (
    <>
<Navbar categories ={categories}/>
<Carousel image1={image1} image2={image2} image3={image3} />
    </>
  )
}

export default Home