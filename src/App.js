import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Home from "./pages/Home";
import Three from "./pages/Three"
import About from "./pages/About";
import Achievement from './pages/Achievement'
import LoadingPage from "./pages/LoadingPage"
import { useState } from 'react'
import React from 'react'


function App() {

//TODO 2022/12/16 解決loading page 問題(原本用useEffect)
    const [loading, setLoading] = useState(true);

  const loadAsync = async() => { //先 delay 在執行 讓loading是false
        setTimeout(() => {
        setLoading(false);
      }, 1000); 
    }
    loadAsync()
  const loadAsync2 = async() => {
        setLoading(true);
    }

  
  const loadingPage = async() => {
    await loadAsync2();
    await loadAsync()
  }
  


  return (
      <>
        <NavBar loadingPage={loadingPage} />
        <Routes>
          <Route path="/" element={loading ? <LoadingPage /> : <Three />} />
          <Route path="/home" element={loading ? <LoadingPage/> : <Home />} />
          <Route path="/about" element={loading ? <LoadingPage/> : <About />} />
          <Route path="/achievement" element={loading ? <LoadingPage/> : <Achievement />} />
        </Routes>
      </>
  );
}

export default App