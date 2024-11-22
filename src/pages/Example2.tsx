import { useMemo, useState } from "react";

export const Example2 = () => {
  const [theme, setTheme] = useState("light");
  const [number, setNumber] = useState(0)

  const getDoubleNumber = (num: number) => {
    for (let i = 0; i < 100000; i++) { console.log("SLOW!") }
    return num * 2;
  };

  const data = useMemo(() => {
    return getDoubleNumber(number);
  }, [number])

  return (
    <div>
      <h2>useMemo</h2>

      <div style={{ backgroundColor: theme === "dark" ? "gray" : "transparent", padding: "10px" }} >
        {/* Theme */}
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          Change Theme
        </button>

        {/* Number  */}
        <button onClick={() => setNumber(number + 1)} style={{ marginLeft: "10px" }}>
          Increase number
        </button>

        <p>This is the Number: {number}</p>
        <p>This is the double Number: {data}</p>
      </div>
    </div>
  )
};
