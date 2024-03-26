import React from 'react'
import Input from '../components/Input'

function LoginPage() {
  return (
    <section className='login-page'>
      <h2>Yuk, login untuk menggunakan aplikasi.</h2>

      <div className='input-login'>
        <Input id='email' type='email' label='Email' />
        <Input id='password' type='password' label='Password' />
        <button type='button'>Login</button>
      </div>

      <p>
        Belum punya akun? <a href='/register'>Daftar di sini</a>
      </p>
    </section>
  )
}

export default LoginPage
