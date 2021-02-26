import { createContext, useEffect, useState } from "react";
import challenges from "../database/challenges.json";
import Cookies from "js-cookie";

interface ActiveChallengeDTO {
  type: string;
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  challengesCompleted: number;
  currentExperience: number;
  startNewChallenge: () => void;
  levelUp: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  activeChallenge: ActiveChallengeDTO;
  experienceToNextLevel: number;
}
interface ChallengesProviderProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider: React.FC<ChallengesProviderProps> = ({
  children,
  ...rest
}) => {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  );
  const [activeChallenge, setActiveChallenge] = useState(null);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("levecurrentExperiencel", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo Desafio 🎉", {
        body: `Valendo ${challenge.amount}xp`,
      });
    }
  };

  const levelUp = () => {
    setLevel(level + 1);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  const completeChallenge = () => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExpirience = currentExperience + amount;
    setCurrentExperience(finalExpirience);
    if (finalExpirience >= experienceToNextLevel) {
      finalExpirience = finalExpirience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExpirience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  };

  return (
    <ChallengesContext.Provider
      value={{
        experienceToNextLevel,
        level,
        challengesCompleted,
        currentExperience,
        startNewChallenge,
        levelUp,
        resetChallenge,
        completeChallenge,
        activeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
