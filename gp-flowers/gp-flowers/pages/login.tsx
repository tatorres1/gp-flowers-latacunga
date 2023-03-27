import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Submitting ${username} with ${password}`);
  };

  return (

    <div className='flex justify-end w-full h-screen items-center bg-gradient-to-r from-cyan-500 to-lime-500'>
      <div className='grid grid-cols-2  place-items-start '>
        <img src={'../assets/images/logo.png'} alt="" />
      </div>
      <div className='flex flex-col items-center pr-60'>
        <h2 className='font-bold text-4xl'>Login</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <label className='text-2xl'> USUARIO : </label>
          <input className='rounded-md	border-2 border-lime-900'
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <label className='text-2xl'> CONTRASENA : </label>
          <input className='rounded-md	border-2 border-lime-900'
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br /><br />
          <button className='px-4 py-1 text-xl font-bold rounded-lg bg-lime-500 hover:bg-cyan-500 border hover:border-lime-500' type="submit"> Ingresar </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

