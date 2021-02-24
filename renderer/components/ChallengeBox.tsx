import React from "react";

import styles from "../styles/components/ChallengeBox.module.css";

const ChallengeBox: React.FC = () => {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div></div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Inicie um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="level-up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
