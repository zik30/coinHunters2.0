import {
  ArrowUpOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons"; // Импорт иконок
import styles from "./Instruction.module.scss";

const Instruction = () => {
  return (
    <section className={styles.instructionSection}>
      <h2 className={styles.instructionTitle}>Управление</h2>
      <div className={styles.modalContent}>
        <div className={styles.explanation}>
          <div className={styles.text}>
            <div className={styles.key}>
              <ArrowLeftOutlined />
            </div>
            <div className={styles.key}>
              <ArrowRightOutlined />
            </div>
            <span>— бег персонажа по соответствующим направлениям</span>
          </div>
          <div className={styles.text}>
            <div className={`${styles.key} ${styles.spaceKey}`}>
              <span>Пробел</span>
            </div>
            <div className={styles.key}>
              <span>Z</span>
            </div>
            <span>— Прыжок</span>
            <span>/</span>
            <span>Удар</span>
          </div>
          <div className={styles.text}></div>
        </div>
      </div>
    </section>
  );
};

export default Instruction;
