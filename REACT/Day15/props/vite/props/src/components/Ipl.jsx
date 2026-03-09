import React from 'react'
import Team from './Team'

function Ipl() {

    const best=[{name:"csk",cup:5},{name:"srh",cup:3},{name:"mi",cup:5}]
  return (
    <>
    <Team lead={best}/>
    </>
  )
}

export default Ipl