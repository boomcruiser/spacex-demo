import styles from "./loader.module.scss";
import { useContext } from "react";
import { LoadingContext } from "../../providers/loading-provider";
const Loader = () => {
  const [loading, setLoading] = useContext(LoadingContext);
  if (!loading) return <></>;
  return (
    <div className={styles.backdrop}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
