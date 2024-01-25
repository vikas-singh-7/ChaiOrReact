import React from 'react'
import Githubcontextprovider from './context/Githubcontextprovider'
import Login from './components/Login'
import Display from './components/Display'

const App = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-around" ,height:"100vh" ,width:"100vw"}}>
      
      <Githubcontextprovider>
        <Login/>
        <Display/>
      </Githubcontextprovider>
    </div>
  )
}

export default App