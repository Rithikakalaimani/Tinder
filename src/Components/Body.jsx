import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import axios from "axios"
import {useDispatch} from "react-redux"
import {addUser} from "../Utils/userSlice"
import { BASE_URL } from "../Utils/constant"

const Body = () => {
  const dispatch = useDispatch();
  const fetchUser = async ()=>{
    try{ 
        const response = await axios.get(BASE_URL+"/profile/view",{
        withCredentials:true
      });
      dispatch(addUser(response.data));
    }
    catch(err)
    {
      console.error(err);
    }  
  }
  // useEffect(()=>{
  //   fetchUser();
  // },[]);
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Body
