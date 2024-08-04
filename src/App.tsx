import React from "react";
import Button from "./Button";
import Input from "./Input";
import UserNameInput from "./UserNameInput";
function App() {
  const[total, setTotal] = React.useState(0);

  function incrementar(){
    setTotal((total) => total +1);
  }
  return (
    <>
    <div>
      <p>Total: {total}</p>
      <Button onClick={incrementar} tamanho="1.5rem">Incrementar</Button>
    </div>
    <Input label="Email" type="date"/>
    <UserNameInput/>
    </>
  )
}

export default App
