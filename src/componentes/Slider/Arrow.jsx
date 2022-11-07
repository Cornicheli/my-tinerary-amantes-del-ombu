import React from 'react'

export default function Arrow(props) {
  return (    
            <div className='Right-arrow'>
                <div onClick={ props.function }>
                    {props.icon}
                </div>
            </div>    

  )
}
