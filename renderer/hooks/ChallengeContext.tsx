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
  activeChallenge: ActiveChallengeDTO;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider: React.FC = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  };

  const levelUp = () => {
    setLevel(level + 1);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        challengesCompleted,
        currentExperience,
        startNewChallenge,
        levelUp,
        activeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
