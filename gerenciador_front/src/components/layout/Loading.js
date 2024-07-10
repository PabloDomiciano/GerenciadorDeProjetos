import load_icon from "../../img/loading.svg";
import styles from "./Loading.module.css";

function Loading() {
  <div className={styles.loader_container}>
    <img className={styles.loader} src={load_icon} alt="Loading" />
  </div>;
}

export default Loading;
