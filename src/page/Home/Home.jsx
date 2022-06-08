import React, { useEffect, useState } from "react";

import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";
import { Picture } from "../../components/Picture/Picture";

import { getImages } from "../../api/getImages";
import { getImgInfoById } from "../../api/getImgInfoById";

import { ModalImg } from "./ModalImg/ModalImg";

import classes from "./Home.module.scss";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [currentImg, setCurrentImg] = useState(null);

  const getAsyncImages = async () => {
    setLoading(true);
    try {
      const images = await getImages();
      setImages(images);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
    setLoading(false);
  };

  const onImageClickHandler = async (id) => {
    setLoading(true);
    const imgInfo = await getImgInfoById(id);
    setCurrentImg(imgInfo);
    setLoading(false);
  };

  const renderImages = () =>
    images.map((img) => (
      <Picture
        key={img.id}
        img={img}
        alt={img.id.toString()}
        onImageClickHandler={onImageClickHandler}
      />
    ));

  useEffect(() => {
    getAsyncImages();
  }, []);

  useEffect(() => {
    currentImg && (document.body.style.overflow = "hidden");
    !currentImg && (document.body.style.overflow = "auto");
  }, [currentImg]);

  return (
    <>
      <Header />
      <main>
        <section className={classes.gallery}>{renderImages()}</section>
      </main>
      <Footer />
      <ModalImg currentImg={currentImg} setCurrentImg={setCurrentImg} />
      <Error errorMessage={error} />
      <Loader isLoading={loading} />
    </>
  );
};
