import { useState } from "react";
const Login = () => {
  // let count = 0

  // const myUseStete = (initiailState)=> {
  //   state = typeof initiailState == "function" ? myState(): myState 
  // }
  const [count, setCount] = useState(0);
  const hnadleIncrementCount = () => {
    // setCount(count + 1)

    setCount(() => {
      return count + 1;
    });
    setCount(() => {
      return count + 1;
    });
    setCount(() => {
      return count + 1;
    });
    setCount(() => {
      return count + 1;
    });
  };
  return (
    <div>
      <button onClick={hnadleIncrementCount}>{count}</button>
    </div>
  );
};

export default Login;
