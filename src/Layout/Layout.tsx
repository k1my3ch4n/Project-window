import styles from "./Layout.module.scss";
import TaskBar from "../TaskBar";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <TaskBar />
    </div>
  );
};

export default Layout;
