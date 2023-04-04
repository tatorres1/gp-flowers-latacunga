import { useState } from 'react';
import usuarios from "../usuarios.json";
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
    <div className='flex w-full justify-end h-screen items-center bg-gradient-to-r from-cyan-500	 to-lime-400 '>
      <div className='ml-2 mr-60'>
        <img  src={'../assets/images/logo.png'} alt="" />
      </div>
      <div className='flex flex-col text-xl items-center mr-40 bg-green-300 p-8 rounded-lg '>
        <h2 className='text-3xl font-serif font-bold'>GP FLOWERS</h2><br/>
        <form onSubmit={handleSubmit}>
          <label className='text-3xl'> Usuario: </label>
          <input className='text-2xl rounded-md border-2 border-green-400'
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br/>
          <label className='text-3xl'>Contrasena: </label>
            <input className='text-2xl rounded-md	border-2 border-green-400'
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            /><br/>
          
          <br />
          <button className='font-bold px-8 text-2xl flex-col items-center text-gray-900 bg-gradient-to-r from-lime-400 to-lime-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg py-2.5 text-center mr-2 mb-2 ' 
          type="submit" onClick={VerificarLogin} >Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

