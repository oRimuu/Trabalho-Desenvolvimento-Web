import styles from "./style.module.css";

export const Button = (props) => {
  return (
    <div>
      <button className={styles.Button}><a href={props.link ? props.link : "#"}>{props.title ? props.title : "Clique Aqui"}</a></button>
    </div>
  );
};
