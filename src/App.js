import { useState } from "react";
import { AppContext } from "./context";
import Input from "./components/Input";
import Display from "./components/Display";
function App() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [showDisplay, setShowDisplay] = useState(false);
  //need to create button as Goback
  return (
    <>
      <AppContext.Provider
        value={{
          item,
          setItem,
          quantity,
          setQuantity,
          price,
          setPrice,
          showDisplay,
          setShowDisplay
        }}
      >
        {/* {showDisplay?<Display/>:<Input/>} */}
        <Input />
        <Display />
      </AppContext.Provider>
    </>
  );
}

export default App;

// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
