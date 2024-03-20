import "./App.css";
import TaskBar from "./TaskBar";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <TaskBar />
    </div>
  );
};

export default App;
