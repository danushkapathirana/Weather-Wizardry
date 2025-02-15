import { ReactNode } from "react";

import classes from "./Container.module.css";

interface ContainerProps {
  children?: ReactNode;
  classNames?: string;
}

export default function Container({ children, classNames }: ContainerProps) {
  return <div className={`${classes.container} ${classNames}`}>{children}</div>;
}
