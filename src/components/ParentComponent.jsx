// import React, { useState } from "react";
// import ChildComponent from "./ChildComponent";

import { useState } from "react";
import Child1 from "./child1";
import Child2 from "./child2";

// export default function ParentComponent() {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(0);

//   const handleAddition = () => {
//     setNumber(number + 5);
//     setCount(number);
//   };
//   const handleSubtraction = () => {
//     setNumber(number - 5);
//     setCount(number);
//   };

//   return (
//     <>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//       />
//       <button onClick={handleAddition}>+</button>
//       <button onClick={handleSubtraction}>-</button>

//       {/* <h1>count: {count}</h1> */}
//       <ChildComponent countvalue={count} />
//     </>
//   );
// }
// export default function ParentComponent() {
//   const [isChecked, setIsChecked] = useState(false);
//   return (
//     <>
//       <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
//       {isChecked ? <Child2 /> : <Child1 />}
//     </>
//   );
// }
