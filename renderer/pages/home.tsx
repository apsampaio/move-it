import React from "react";
import Head from "next/head";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
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
