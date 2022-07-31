import './App.css';
import {useEffect, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import GamingTable from "./components/GamingTable";

function App() {

  const shouldLog = useRef(true)
  useEffect(() => {
    if(shouldLog.current){
      shouldLog.current = false
    }
  }, [])

  return (
    <div>
      <GamingTable/>
    </div>
  );
}

export default App;
