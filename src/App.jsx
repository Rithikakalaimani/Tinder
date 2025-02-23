import Body from "./Components/Body";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body/>}>
           <Route path='/login' element={<Login/>}/>
           <Route path="/profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
