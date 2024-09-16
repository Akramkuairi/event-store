
import React, { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick'
import { HeaderOHome } from './HeaderOHome';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productsData } from '../products';
import { ProductsContext } from '../contextApp/context';

export const HomeHeader = () => {

  const products = useContext(ProductsContext);


    const settings = {
    
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoPlay: true,
      };
  return (
    <section className="min-h-[80vh] header  max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0   ">

    
    <Slider {...settings}>
    {products?.map((el,i)=>{
      return (
        <HeaderOHome key={i} {...el} />
      );
    })}


</Slider>

  


    </section>
  )
}
/**
 
   
 
 */