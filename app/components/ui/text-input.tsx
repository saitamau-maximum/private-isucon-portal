import type { ComponentProps } from "react";
import styles from "./text-input.module.css";

type Props = ComponentProps<"input">;

export const TextInput = (props: Props) => {
  return <input className={styles.input} {...props} />;
};
