import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Submitting ${username} with ${password}`);
  };

  return (
    <div className='flex justify-end w-full h-screen items-center bg-gradient-to-r from-lime-900	 to-lime-400 '>
      <div>
        <img className='flex-col items-center' src={'../assets/images/logo.png'} alt="" />
      </div>
      <div className='flex flex-col items-center pr-60'>
        <h2 className='font-bold'>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Usuario : </label>
          <input className='rounded-md	border-2 border-rose-500'
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br/>
          <label>
            Contrasena : </label>
            <input className='rounded-md	border-2 border-rose-500'
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          
          <br />
          <button className='font-bold flex-col items-center border-solid border-2 border-sky-500' type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

