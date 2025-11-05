import styles from "./style.module.css";

export const Input = (props) => {
  return (
    <div>
      <p className={styles["text-input"]}>
        {props.title ? props.title : "Texto"}
      </p>
      <input className={styles["compInput"]}
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder ? props.placeholder : "Digite aqui..."}
      />
    </div>
  );
};
