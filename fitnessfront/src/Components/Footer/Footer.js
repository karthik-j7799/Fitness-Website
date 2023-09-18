import React from 'react'
import { Link } from 'react-router-dom'
import FooterNoLog from './Footernolog'
import FooterCus from './FooterCus'
import FooterDoc from './FooterDoc'
import FooterGym from './FooterGym'
import FooterTrainer from './FooterTrainer'



function Footer({auth}) {

  if(auth==0){
    return <FooterNoLog/>
  }
  else if(auth==1){
    return <FooterCus />
  }
  else if(auth==2){
    return <FooterDoc/>
  }
  else if(auth==3){
    return <FooterTrainer/>
  }
   else if(auth==4){
    return <FooterGym/>
  }

}

export default Footer