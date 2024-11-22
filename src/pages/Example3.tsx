import { memo, useEffect } from "react";


export const Example3 = () => {
  const getData = (name: string) => {
    return { text: "this is " + name }
  }

  return (
    <div>
      <h2>useCallback</h2>
      <MemoChild getData={getData} />
    </div>
  )
}

const ChildComponent = ({ getData }: { getData: (name: string) => object }) => {
  useEffect(() => {
    const data = getData("Tam")
    console.log(data)
  }, [getData])

  return (
    <div style={{ border: "2px dashed black", marginTop: "10px", padding: "10px" }}>
      This is the child component
    </div>
  )
};

const MemoChild = memo(ChildComponent)
