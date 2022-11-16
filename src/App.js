import React from "react";
// import Home from "./Home";
// import Pic from './img/pix11.jpg'
// import Footer from "./footer";
import './App.css';

function App() {
  
const arr = [1, 1, 3, 5, 8];
const [jones, ola, ugo, ozor, chi] = arr;

const nums = arr.map((value, index, arr) => 
{
    return value * 2
    
//   console.log(value);
})
return <div className="App">{nums}</div>

}



//   return (
//     <div className="App">
//       <div id="profile_img">
//         <img src={Pic} alt="my pix"/>
//       </div>
//       <Home />
//       <Footer />
//     </div>
//   );
// }

export default App;
