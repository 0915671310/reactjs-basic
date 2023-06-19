import "./App.css";
import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleNumber = useCallback(() => {
    setCount(count + 1);
    switch (count) {
      case 0:
        <h2>Cần Tiền </h2>;
        break;
      case 1:
        console.log("cần sa");
        break;
      case 2:
        console.log(`cần giộc`);
        break;
    }
  }, [count]);
  console.log([count]);
  return (
    <div className="App">
      <button onClick={handleNumber}>{count}</button>
    </div>
  );
}

export default App;
