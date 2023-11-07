import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Solution from "./pages/Solution/Solution";
import Architecture from "./pages/Architecture/Architecture";
import Feedback from "./pages/Feedback/Feedback";
import Footer from "./pages/Footer/Footer";
import SignUp from "./pages/Auth/SignUp";
import Login from "../src/pages/Auth/Login"
import { initFirebase } from "./firebase";
import { getAuth ,createUserWithEmailAndPassword} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { handleGoogleRedirect } from "./firebaseGoogle";

const App = () => {
 const [login,setLogin]= useState(true);
 const [load,setLoad] = useState(false)
 initFirebase();
 const auth = getAuth()
 const [user, loading] = useAuthState(getAuth());
 useEffect(() => {
  setLoad(true)
  handleGoogleRedirect(auth,setLoad)
}, []);
if(load){
  return <>
  <h2>Loading...</h2>
  </>;
}

 const router = createBrowserRouter([
  {
    path: "/",
    element: [<Home/>,<About/>,<Footer/>],
  },
  
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },

]);

 if(!user){
  return <Login/>
 }
else{
  return<>
   <RouterProvider router={router} />
  </>
}
};

export default App;
