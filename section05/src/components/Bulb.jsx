import { useState } from 'react'

const Bulb = () => {
  const [light, serLight] = useState("ON");

  const onLightClick = (e)=>{
    serLight(light === "ON" ? "OFF" : "ON")
  }

  console.log(light);
  return <>
  <div>
    {light === "ON" ? <h1 style={{backgroundColor:"orange", color:"white"}}>ON</h1> : <h1 style={{backgroundColor:"gray", color:"#454545"}}>OFF</h1>}
    
    <button type='button' onClick={onLightClick}> {light === "ON" ? "OFF" : "ON"} </button>
  </div>
  </>
}
export default Bulb;