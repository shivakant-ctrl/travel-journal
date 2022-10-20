import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
import "./App.css"

function App() {
  const newData = data.map((item) => {
    return (
      <Card key={item.id} item={item} />
    )
  })
  return (
    <div>
      <Navbar />
      {newData}
    </div>
  )
}

export default App