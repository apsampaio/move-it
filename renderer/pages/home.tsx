import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";

import styles from "../styles/pages/Home.module.css";
import ChallengeBox from "../components/ChallengeBox";
import { CountdownProvider } from "../hooks/CountdownContext";
import { ChallengesProvider } from "../hooks/ChallengeContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home: React.FC<HomeProps> = ({
  level,
  currentExperience,
  challengesCompleted,
}) => {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
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
    </ChallengesProvider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
