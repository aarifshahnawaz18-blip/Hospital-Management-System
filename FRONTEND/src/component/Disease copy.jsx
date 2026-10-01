import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Disease= () => {
  const departmentsArray = [
    {
      name: "Viens Disease",
      imageUrl: "public/All Viens Disease.jpg",
    },
    {
      name: "Arthritis",
      imageUrl: "public/Arthritis.jpg",
    },
    {
      name: "Asthama",
      imageUrl: "public/Asthama.jpg",
    },
    {
      name: "Cervical",
      imageUrl: "public/Cervical.jpg",
    },
    {
      name: "Hair Fall",
      imageUrl: "public/Hair Fall.jpg",
    },
    {
      name: "Heart Disease",
      imageUrl: "public/Heart Disease.jpg",
    },
    {
      name: "Infertility Probelm",
      imageUrl: "public/Infertility.jpg",
    },
    {
      name: "Kidney Stone",
      imageUrl: "public/Kidney Stone.jpg",
    },
    {
      name: "Migraine",
      imageUrl: "public/Migraine.jpg",
    },
    {
      name: "Paralysis",
      imageUrl: "public/Paralysis.jpg",
    },
    {
      name: "Piles",
      imageUrl: "public/Piles.jpg",
    },
    {
      name: "Pimples on face",
      imageUrl: "public/Pimple.jpg",
    },
    {
      name: "Sciatica",
      imageUrl: "public/Sciatica.jpg",
    },
    {
      name: "Sexual Disorder",
      imageUrl: "public/Sexual Disorder.jpg",
    },
    {
      name: "Skin Problem",
      imageUrl: "public/Skin Disease.jpg",
    },
    {
      name: "Slip Disc",
      imageUrl: "public/Slip disc.jpg",
    },
    {
      name: "Spondylosis",
      imageUrl: "public/Spondylosis.png",
    },
    {
      name: "Stomach Problem",
      imageUrl: "public/Stomuch Problem.png",
    },
    


  

  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Disease</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Disease;