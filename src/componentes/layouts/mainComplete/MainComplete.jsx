import React from 'react'
import AutoToTop from '../../AutoToTop'
import { Footer } from '../../Footer'
import { Header } from '../../Header'


export default function main(props) {
  return (
    <div className='Home'>
      <AutoToTop/>
      <Header/>
      <div className='div-main'>{props.children}</div>
      <Footer/>
    </div>
  )
}
