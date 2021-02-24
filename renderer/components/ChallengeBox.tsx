import React, { useContext } from "react";
import { ChallengesContext } from "../hooks/ChallengeContext";

import styles from "../styles/components/ChallengeBox.module.css";

const ChallengeBox: React.FC = () => {
  const { activeChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="challenge" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengeCompletedButton}>
              Completei
            </button>
          </footer>
        </div>
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
