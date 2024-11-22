import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import "./App.css"

function App() {
  return (
    <div className="app-page">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default App
