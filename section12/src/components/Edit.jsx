import React from 'react';
import { useParams } from "react-router-dom";


const Edit = ()=>{
  const params = useParams();
  return <>
    <h2>{params.id} Edit</h2>
  </>
}
export default Edit;