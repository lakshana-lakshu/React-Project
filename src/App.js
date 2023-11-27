
// // //App.js
// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./styles/App.scss";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Pages from "./pages/Pages";
// import Payment from "./pages/Payment";
// import Login from "./components/Login";
// import SignUpForm from "./components/SignUp";
// import { convertLength } from "@mui/material/styles/cssUtils";
// import Header from "./components/Header";
// // import Footer from "./components/Footer";
// // import SignIn from "./components/Login";
// // import SignUp from "./components/SignUp";
// // import Header from "./components/Header";

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <>
//     <BrowserRouter>
//      <div
//         style={{
          
//         //   backgroundImage: `url(https://images.pexels.com/photos/6994983/pexels-photo-6994983.jpeg?auto=compress&cs=tinysrgb&w=600)`,
//         //   backgroundPosition: 'center',
//         //   backgroundRepeat: 'no-repeat',
//         // backgroundSize:'contain',
//         //   display: 'flex',
//         //   flexDirection: 'row',
//         //   width: '100%',
//         //   minHeight:'100vh',
//         //   alignItems: 'center',
//         //   justifyContent: 'center'
//         }}
//       >
//         <Routes>
//       <Route path="/signup" element={<SignUpForm />} />
//       <Route path="/login" element={<Login/>}/>
//       <Route path="/home" element={<Home/>}/> 
//         {!isLoggedIn && (
//           <Route
//             path="/"
//             element = 
//             {(!isLoggedIn) ? <Login onLogin={() => setIsLoggedIn(true)} /> : <Layout/>}
//           />
//         )}
//         {isLoggedIn && (
//           <Route path="/" element={<Layout />}>
//             <Route path="/home" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route
//               path="/contact"
//               element={<Pages mdpath="./md/credits.md" />}
//             />
//             <Route path="/payment" element={<Payment />} />
//           </Route>
//         )}
//       </Routes>
//       </div>
//     </BrowserRouter>
//     </>
//   );
// }
import { useState } from "react";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
//import Pages from "./pages/Pages";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Login from "./components/SignIn";
import SignUpForm from "./components/SignUp";
import Header from "./components/Header";
import MyDonations from "./pages/MyDonations";
import SignIn from "./components/Login";



export default function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <div>
          <Header/>
          {/* Uncomment or remove the styles as needed */}
          {/* <div style={{...}}> */}
          <Routes>
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/donation" element={<MyDonations/>}/>
            {/* {isLoggedIn ? (
            <> */}
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/mydonations" element={<MyDonations />} />
                </Route>
              {/* </>
            ) : (
              <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
            )} */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
