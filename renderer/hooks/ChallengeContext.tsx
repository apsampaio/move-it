import { createContext, useState } from "react";

export const ChallengesContext = createContext({});

export const ChallengesProvider: React.FC = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  return (
    <ChallengesContext.Provider
      value={{ level, challengesCompleted, currentExperience }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
