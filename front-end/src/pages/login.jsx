import React, { useState, useEffect } from "react"
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/user/login',
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      )
      const acessToken = response.data
      console.log(acessToken)
      setEmail('');
      setPassword('');
      setSucess(true)
    } catch (error) {
      if(!error?.response) {
        setError('Ocorreu um erro inesperado')
      }
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Email</label>
        <input
          type="text"
          id="user"
          autoComplete="off"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          id="pass"
          autoComplete="off"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
