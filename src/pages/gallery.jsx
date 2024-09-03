import React from "react";
import Gallery from "react-photo-gallery";
import oxairGalleryData from "@jsonData/oxairGallery.json";
import InnerPageBanner from "@components/InnerPageBanners";
//import Image from "next/image";
import Head from "next/head";

const OxairGallery = () => {
  const photos = oxairGalleryData.ladakhGallery.map((photo) => ({
    src: photo.image,
    width: photo.width, // ensure these are provided in your JSON
    height: photo.height,
  }));

  const openLightbox = (event, obj) => {
    // Implement your lightbox logic here
  };

  return (
    <>
    <Head>
    <title>Oxair – Leading Oxygen Generating System</title>
  <meta name="description" content="Gallery Page" />
  <link rel="icon" href="/icons/favicon-16x16.png" type="image/x-icon" />
    </Head>
    <InnerPageBanner
    heading="Oxair Gallery"
    subHeading="Ladakh Photos"
    />
    <div className="container">
    <div className="oxairGallery">
        <h3>Ladakh Photos</h3>
      <Gallery photos={photos} onClick={openLightbox} />
      
    </div>
    </div>
    </>
  );
};

export default OxairGallery;
