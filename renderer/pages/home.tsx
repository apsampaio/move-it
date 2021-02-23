import React from "react";
import Head from "next/head";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Home;
