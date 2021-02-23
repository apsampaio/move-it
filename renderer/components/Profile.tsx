import React from "react";
import styles from "../styles/components/Profile.module.css";

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/apsampaio.png" alt="profile" />
      <div>
        <strong>Andre Sampaio</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
