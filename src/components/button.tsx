import React, { ReactElement } from "react";
import "./components.css";

interface Props {
  children: any;
  className?: string;
}

export default function Button({ children, className }: Props): ReactElement {
  return <button className={className}>{children}</button>;
}
