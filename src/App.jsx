import { Provider } from "react-redux";
import Body from "./Components/Body";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import appStore from "./Utils/appStore";
function App() {
  
  return (
    <div>
    <Provider store={appStore}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body/>}>
           <Route path='/login' element={<Login/>}/>
           <Route path="/profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
     
    </div>
  );
}

export default App
