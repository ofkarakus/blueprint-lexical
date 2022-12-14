import * as e from "./styles";
import { toolbarArr } from "./utils";

import Button from "../../atoms/Button";

const Toolbar = () => {
  return (
    <e.Wrapper>
      {toolbarArr.map((icon) => (
        <Button>{icon}</Button>
      ))}
    </e.Wrapper>
  );
};

export default Toolbar;
