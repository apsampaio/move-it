import styles from "../styles/components/LevelUpModal.module.css";

const LevelUpModal: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>2</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={() => {}}>
          <img src="/icons/close.svg" alt="Fechar" />
        </button>
      </div>
    </div>
  );
};

export default LevelUpModal;
