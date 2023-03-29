import { useState } from 'react';
import usuarios from "../usuarios.json";
import { Link } from "react-router-dom"; 
import { useRouter } from 'next/router'




const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Submitting ${username} with ${password}`);
  };
  //importante: la declaracion de router tiene que ir fuera de
  //la funcion , solamente en la funcion principal
  const router = useRouter()
  function VerificarLogin (){
    

    //alert(password);
    var longit = usuarios.length;
    var contador = 0;

    var ingresa_admin = false;
    var ingresa_usuario = false;
    var direccion_admin = "./indexAdmin"; 
    var direccion_usuario="./indexUser";

  
      while(contador < longit)
      {
        if(usuarios[contador].username == username
          && usuarios[contador].password == password
          && usuarios[contador].rol == 'admin')
        {
          ingresa_admin = true;
          break;
        }else if(usuarios[contador].username == username
          && usuarios[contador].password == password
          && usuarios[contador].rol == 'usuario')
          {
            ingresa_usuario = true;
            break;
          }else if(usuarios[contador].username != username
          || usuarios[contador].password != password){
          ingresa_admin = false;
          ingresa_usuario = false;
        };
        //const item = usuarios[0].username;
        contador++;
        //alert(item);
      }
      //alert("esto es para controlar true o false");
    
      if(ingresa_admin == true) {
        router.push(direccion_admin);
      }else if(ingresa_usuario == true){
        router.push(direccion_usuario);
      }else{
        alert("DATOS INCORRECTOS, INTENTE DE NUEVO");
      }
    }
  

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
          <button className='font-bold flex-col items-center 
          border-solid border-2 border-sky-500' 
          type="submit" onClick={VerificarLogin} >Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

