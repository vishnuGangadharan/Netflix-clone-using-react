import { useState } from 'react'
import NavBar from './containers/NavBar/NavBar'
 import './App.css'
import Banner from './containers/Banner/Banner'
import RowPost from './containers/Rowpost/RowPost'
import {original,actions, comedy, horror } from './URL'

function App() {


  return (
    <>
      <NavBar/>
      <Banner/>
      <RowPost url={original} title={'Netflix Original'} />
      <RowPost url={actions} title={'Action'} isSmall/>
      <RowPost url={comedy} title={'Comedy'} isSmall/>
      <RowPost url={horror} title={'Horror'} isSmall/>
    </>
  )
}

export default App
