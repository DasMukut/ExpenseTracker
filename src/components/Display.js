import { AppContext } from "../context";
import { useContext } from "react";
function Display() {
  const { item } = useContext(AppContext);
  return (
    <>
      <h1>Inside Display</h1>
      <h1>{item}</h1>
    </>
  );
}

export default Display;
