import React from 'react'
import Input from '../components/Input'

function RegisterPage() {
  return (
    <section className='register-page'>
      <h2>Isi form untuk mendaftar akun</h2>

      <div className='input-register'>
        <Input id='name' type='text' label='Name' />
        <Input id='email' type='email' label='Email' />
        <Input id='password' type='password' label='Password' />
        <Input id='confirmPassword' type='password' label='confirmPassword' />
        <button type='button'>Register</button>
      </div>

      <p>
        Sudah punya akun? <a href='/'>Login di sini</a>
      </p>
    </section>
  )
}

export default RegisterPage
