import React from 'react'
import { Link } from 'react-router-dom'
import Navnolog from './Navnolog'
import NavCus from './NavbarCus'
import NavDoc from './NavbarDoc'
import NavGym from './NavbarGym'
import NavTrainer from './NavbarTrainer'
import NavAdmin from './NavAdmin'

function Navbar({auth}) {
  if(auth==0){
    return <Navnolog/>
  }
  else if(auth==1){
    return <NavCus/>
  }
  else if(auth==2){
    return <NavDoc/>
  }
  else if(auth==3){
    return <NavTrainer/>
  }
  else if(auth==4){
    return <NavGym/>
  }
  else if(auth==5){
    return <NavAdmin/>
  }
}

export default Navbar