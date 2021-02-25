import { createContext, useState } from "react";
import challenges from "../database/challenges.json";

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
  activeChallenge: ActiveChallengeDTO;
  experienceToNextLevel: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider: React.FC = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  };

  const levelUp = () => {
    setLevel(level + 1);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
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
        activeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
