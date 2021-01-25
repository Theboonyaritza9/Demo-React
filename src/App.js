import React from "react"
import './App.css';
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Content api="data2" />
      
    </div>
  )
}

export default App;


