import { ReactNode } from "react";
import * as e from "./styles";

const Button = ({ children }: { children?: ReactNode }) => {
  return <e.Wrapper>{children}</e.Wrapper>;
};

export default Button;
