import { useContext } from "react";
import { AppContext } from "../context";

function Input() {
  const {
    item,
    setItem,
    setQuantity,
    quantity,
    setShowDisplay,
    showDisplay
  } = useContext(AppContext);
  const handleData = (e) => {
    e.preventDefault();
    const details = {
      item1: item,
      quantity1: quantity
    };

    console.log(details);
  };
  return (
    <form onSubmit={handleData}>
      <div>
        <label>Title</label>
        <input
          type="text"
          placeholder="Insert title"
          value={item}
          onChange={(e) => setItem([...item, e.target.value])}
        />
      </div>

      <div>
        <label>Quantity</label>
        <input
          type="number"
          placeholder="0"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div>
        <label>Title</label>
        <input
          type="number"
          placeholder="0.00"
          //  onChange={e=>setPrice(e.target.value)}
        />
      </div>
      <button type="submit">AddItems</button>
    </form>
  );
}

export default Input;
