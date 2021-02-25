import React, { useContext } from "react";
import { ChallengesContext } from "../hooks/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/apsampaio.png" alt="profile" />
      <div>
        <strong>Andre Sampaio</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
