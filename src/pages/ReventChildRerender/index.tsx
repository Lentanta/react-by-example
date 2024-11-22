import { memo, useState } from "react"

export const ReventChildRerender = () => {
  return (
    <div>
      <h1>Revent children component re-render</h1>
      <ParentComponent />
    </div>
  )
}

const ParentComponent = () => {
  const [theme, setTheme] = useState("light")

  const style = {
    backgroundColor: theme === "dark" ? "lightgray" : "transparent",
    padding: "10px"
  };

  return (
    <div style={style}>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Change Theme
      </button>

      <ChildComponent />
      <MemoChildComponent />
    </div>
  )
}

const ChildComponent = () => {
  console.log("Child component render")

  const style = {
    border: "2px dotted black",
    marginTop: "10px",
    padding: "10px",
  };

  return (
    <div className="render" style={style}>
      I am child component
    </div>
  )
};

const MemoChildComponent = memo(() => {
  console.log("Memo child component render")

  const style = {
    border: "2px dotted black",
    marginTop: "10px",
    padding: "10px"
  };

  return (
    <div className="render" style={style}>
      I am memo child component
    </div>
  )
});

