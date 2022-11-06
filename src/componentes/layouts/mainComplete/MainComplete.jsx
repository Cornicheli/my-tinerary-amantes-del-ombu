import React from 'react'
import { Footer } from '../../Footer'
import { Header } from '../../Header'


export default function main(props) {
  return (
    <div className='Home'>
      <Header/>
      <div className='div-main'>{props.children}</div>
      <Footer/>
    </div>
  )
}
