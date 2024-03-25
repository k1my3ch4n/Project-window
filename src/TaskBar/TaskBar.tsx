import { Window } from "../assets/images";
import styles from "./TaskBar.module.scss";

const TaskBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <Window />
      </div>
    </div>
  );
};

export default TaskBar;
