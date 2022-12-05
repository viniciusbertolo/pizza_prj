import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'
import axios from 'axios'

const login = () => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleClick = async () => {
    try{
      await axios.post("http://localhost:3000/api/login", {
        username, password
      })
      router.push("/admin")
    }catch(err){
      console.log(err)
      setError(true)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Adimn Dashboard</h1>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
        <input placeholder='username' className={styles.input} 
        onChange={(e)=>setUsername(e.target.value)} />

        <input placeholder='password' className={styles.input} type='password' 
        onChange={(e)=>setPassword(e.target.value)} />

        <button onClick={handleClick} className={styles.button}>Sign In</button>
      
      </div>

    </div>
  )
}

export default login