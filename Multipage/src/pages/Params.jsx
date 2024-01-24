import React from 'react';
import { useParams } from 'react-router-dom';

const Params = () => {
    const {data} = useParams();
  return (
    <div style={{height:"30vh" , width:"100vw" , backgroundColor:"pink" ,display:"flex" ,justifyContent:"center",alignItems:"center"}} >
<div style={{background:"blur", backgroundColor:"yellow", height:"15vh" , width:"80vw"}}>
{data}
</div>
    </div>
  )
}

export default Params