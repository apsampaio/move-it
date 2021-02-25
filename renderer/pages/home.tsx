import React from "react";
import Head from "next/head";

import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";

import styles from "../styles/pages/Home.module.css";
import ChallengeBox from "../components/ChallengeBox";
import { CountdownProvider } from "../hooks/CountdownContext";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
};

export default Home;
