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
    </div>
  );
};

export default Home;
