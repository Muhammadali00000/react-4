import React, { useState } from 'react'
import './State.css'


const State = () => {

    const [num, setNum] = useState(0)
    const [text, setText] = useState('')
    const [img, setImg] = useState(true)
    const [open, setOpen] = useState('OPEN')


    const plus = () => {
      if(num < 10) {
        setNum(num + 1)
      }
    }

    const minus = () => {
      if(num > 0) {
        setNum(num - 1)
      }
    }


    const change = () => {
      setImg(!img)
      setOpen(img ? 'OPEN' : 'CLOSE')
    }




  return ( 
    <>



    <div className="box">
      <button onClick={change}>{open} image</button>
      {img && (
        <img src="https://shapka-youtube.ru/wp-content/uploads/2024/08/kartinka-dlya-avatarki-siluety-muzhchin-risunok-odnogo-muzhskogo-silueta.jpg" alt="" />
      )}
    </div>



    <div className="box">
      <h2>{text}</h2>
      <input value={text} type="text" onChange={(e) => setText(e.target.value)} />
    </div>



    <div className="box">
        <h2>{num}</h2>
        <button onClick={(plus)}>+</button>
        <button onClick={(minus)}>-</button>
        <button onClick={() => setNum(num * 2)}>*</button>
        <button onClick={() => setNum(num / 2)}>/</button>
        <button onClick={() => setNum(0)}>delete</button>
    </div>

    

    </>
  )
}

export default State