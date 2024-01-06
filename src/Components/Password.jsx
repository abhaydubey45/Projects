import React from 'react'
import { useState,useCallback,useEffect,useRef } from 'react'

function Password() {
  const [length , setlength] = useState(8)
  const [number , setnumber] = useState(false)
  const [character , setcharacter] = useState(false)
  const [password , setpassword] = useState("")

  //refhook
  const passwordref = useRef(null)
  const copypassword = useCallback(() => {
    passwordref.current?.select();
  
  window.navigator.clipboard.writeText(password)
  } , [password])
  
  const passwordgenerator = useCallback(() => {
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "1234567890"
  
    if(character) str += "!@#$%^&*"

    for(let i=1 ; i<= length ;i++ ){
     let char = Math.floor(Math.random()*str.length)
     console.log(char)
     pass += str.charAt(char)
     console.log(pass)
    }
    setpassword(pass)

    
  }, [length,number,character,setpassword])

  useEffect(()=>{passwordgenerator()},[length,character,number,passwordgenerator])
  return (
    <div className='w-full mt-5 max-w-md mx-auto shadow-md rounded-lg px-4 py-8 bg-gray-700'>
      <h1 className='text-white text-center p-2 my-3'>Password Geneartor</h1>
      <div className='flex rounded-lg overflow-hidden mb-4'>
       <input type="text" 
       value={password}
       ref={passwordref}
       className='w-full outline-none py-1 px-3'placeholder='password' readOnly />
       <button className='rounded-lg bg-red-600 text-white px-2 py-1 m-1 shrink-0' onClick={copypassword}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
     <div className='flex items-center gap-x-1'>
      <input type="range"  
      min={6} max={16} value={length} className='cursor-pointer ' 
      onChange={(e) => {setlength(e.target.value)}}/>
      <label className='text-yellow-500'>length:{length}</label>
     </div>
     <div className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={number} id="numberinput" onChange={(e)=>{setnumber((prev) => (!prev))}} />
      <label className='text-yellow-500'>Numbers</label>

     </div>

     <div className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={number} id="numberinput" onChange={(e)=>{setcharacter((prev) => (!prev))}} />
      <label className='text-yellow-500'>Characters</label>

     </div>
      </div>
    </div>
  )
}

export default Password;
