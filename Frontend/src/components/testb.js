import React, { useContext } from 'react'
import {createContext, useState} from 'react';
import {Store} from './App'

function Componentb() {
    const [data,setdata] = useContext(Store)
  return (
    <div>Cart items are {data.length}</div>
  )
}

export default Componentb