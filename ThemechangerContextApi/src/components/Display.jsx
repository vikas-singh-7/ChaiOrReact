import React, { useContext } from 'react'
import Mydetails from '../context/Details'

const Display = () => {

    const{details}=useContext(Mydetails);
    console.log(details)

 if(details){
    return ( <div style={{height:'200px',width:"200px",border:"2px solid black",padding:"4px",textAlign:"center"}}>
       <h3>{details.firstname} {details.lastname}</h3>
       </div>
    )
 }else{
    return (
        <>
    <div style={{height:'200px',width:"200px",border:"2px solid black",padding:"4px",textAlign:"center"}}>
       <h3>please login first</h3>
       </div>
        </>
    )
 }
}
 
 export default Display
 
   
 