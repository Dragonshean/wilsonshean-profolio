import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import LoadingPage from "./pages/LoadingPage"
import React, { lazy, useState } from 'react'
import Home from './pages/Home'

//TODO 2022/12/17 新增 lazy load
// const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Achievement = lazy(() => import('./pages/Achievement'))
const Three = lazy(() => import("./pages/Three"))





function App() {


//TODO 2022/12/16 解決loading page 問題(原本用useEffect)
    const [loading, setLoading] = useState(true);



  const loadAsync = async() => { //先 delay 在執行 讓loading是false
        setTimeout(() => {
        setLoading(false);
      }, 2000); 
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
            <Route path="/" element={loading ? <LoadingPage/> : <Home />} />
            <Route path="/three" element={loading ? <LoadingPage /> : <Three />} />
            <Route path="/about" element={loading ? <LoadingPage/> : <About />} />
            <Route path="/achievement" element={loading ? <LoadingPage/> : <Achievement />} />
        </Routes>
      </>
  );
}

export default App