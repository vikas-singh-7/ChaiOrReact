import React from 'react'
import Detailsprovider from './context/Detailsprovider'
import DetailsCard from './components/DetailsCard'
import Display from './components/Display'

const App2 = () => {
  return (
    <div>
        <Detailsprovider>
            <DetailsCard/>
            <Display/>
        </Detailsprovider>
    </div>
  )
}

export default App2