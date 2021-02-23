import React from "react";
import Head from "next/head";
import ExperienceBar from "../components/ExperienceBar";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
      </Head>
      <ExperienceBar />
      <section>//TODO 37:19 Video</section>
    </div>
  );
};

export default Home;
