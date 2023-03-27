import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Submitting ${username} with ${password}`);
  };

  return (
    <div className ='flex justify-end w-full h-screen items-center bg-emerald-900'>
      <div className =' flex flex-col items-center pr-60'>
        <h2 className = 'font-bold'>Login</h2>
        <form onSubmit = {handleSubmit}>
          <label>
            Usuario:
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <br />
          <label>
            Contrasena:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

