import { AppContext } from "../context";
import { useContext } from "react";
function Display() {
  const { itemList,setItemList } = useContext(AppContext);
  
  
  const handleDelete=(id)=>{
    const updates=itemList.filter((value,ind)=>{
      return ind!==id;
    })
    setItemList(updates)
  }
  return (
    <>
      <h1>Inside Display</h1>
      <div>
       <ol>
         {itemList.map((value,ind)=>{
           return <li key={ind}>{value}
            <button onClick={()=>handleDelete(ind)}>delete</button>
           </li>
          })}
      </ol>
      </div>
    </>
  );
}

export default Display;
