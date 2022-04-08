import { getAuth } from "firebase/auth";
import './App.css';
import app from "./firebase.init";
const auth = getAuth(app);
function App() {
  const handleEmailBlur = event =>{
    console.log(event.target.value);
  }
  const handlePasswordChange = event =>{
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <form>
        
        <input onBlur={handleEmailBlur} type="email" name=""  id="" />
        <input onChange={handlePasswordChange} type="password"  name="" id=""/>
      </form>
    </div>
  );
}

export default App;
