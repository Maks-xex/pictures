import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";
import { Picture } from "../../components/Picture/Picture";

import { getAsyncImages } from "../../features/images/getAsyncImages";
import { onClickAsync } from "../../features/currentImg/onClickAsync";

import { ModalImg } from "./ModalImg/ModalImg";

import classes from "./Home.module.scss";

export const Home = () => {
  const { images, loading, isError, error } = useSelector(
    (state) => state.images
  );

  const dispatch = useDispatch();

  const onImageClickHandler = (id) => {
    dispatch(onClickAsync(id));
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
    dispatch(getAsyncImages());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <section className={classes.gallery}>{renderImages()}</section>
      </main>
      <Footer />
      <ModalImg />
      <Error isError={isError} errorMessage={error} />
      <Loader isLoading={loading} />
    </>
  );
};
