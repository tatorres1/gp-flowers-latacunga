import { useState, useEffect } from 'react';
//import usuarios from "../usuarios.json";
import { useRouter } from 'next/router'




const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  //control para conseguir datos de login

  const [usuarios, setUsuarios] = useState([]);
  const [valorUsername, setValorUsername] = useState("");
  const [valorPassword, setValorPassword] = useState("");
  const [valorRol, setValorRol] = useState("");
  const [ ingresaAdmin , setIngresaAdmin] = useState(false);
  const [ ingresaUsuario, setIngresaUsuario] = useState(false);

  async function getUsuarios(){
    
    const queryParams = new URLSearchParams({
      username: valorUsername ,
      password: valorPassword,
      rol: valorRol
    });
    
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/login?${queryParams.toString()}`,
    postData);
    const response = await res.json();
    setUsuarios(response.usuarios);
  }

  function verdata(){
    alert(valorUsername);
    alert(valorPassword);
    alert(valorRol);
    alert(ingresaAdmin);
    alert(ingresaUsuario);
  }

  useEffect(() => {
    getUsuarios();
  }, []);


  const asignarValorUsername = event => {
    setValorUsername(event.target.value);
  }

  const asignarValorPassword = event => {
    setValorPassword(event.target.value);
  }


  ///////////////////////

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Submitting ${username} with ${password}`);
  };
  //importante: la declaracion de router tiene que ir fuera de
  //la funcion , solamente en la funcion principal
  const router = useRouter()

  function VerificarLogin (){

    var direccion_admin = "./indexAdmin"; 
    var direccion_usuario="./indexUser";

    setIngresaAdmin(false);
    setIngresaAdmin(false);

        //busqueda y comparacion de si el valor en input esta en el objeto consultado


        for (let i = 0; i < usuarios.length; i++) {
          const usuario = usuarios[i];
          
          if ( (usuario.username === valorUsername) && (usuario.password === valorPassword) && (usuario.rol === 'admin') ) {
            setIngresaAdmin(true);alert("estoy");        router.push(direccion_admin);

            break;
          } else if ( (usuario.username === valorUsername) && (usuario.password === valorPassword) && (usuario.rol === 'usuario') ){
            setIngresaUsuario(true);alert("estoy2");        router.push(direccion_usuario);

            break;
          } 

        };

      //alert("esto es para controlar true o false");
    /*
      if(ingresaAdmin == true) {
      }else if( ingresaUsuario == true){
      }else {alert('usuario o contraseña incorrectas, o no se encuntra en el sistema')};
*/


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
            value={valorUsername} onChange={asignarValorUsername}
          />
          <br/>
          <label className='text-3xl'>Contrasena: </label>
            <input className='text-2xl rounded-md	border-2 border-green-400'
              type="password"
              name="password"
              value={valorPassword} onChange={asignarValorPassword}
            /><br/>
          
          <br />
          <button className='font-bold px-8 text-2xl flex-col items-center text-gray-900 bg-gradient-to-r from-lime-400 to-lime-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg py-2.5 text-center mr-2 mb-2 ' 
          type="submit" onClick={verdata} >probar</button>
          <button className='font-bold px-8 text-2xl flex-col items-center text-gray-900 bg-gradient-to-r from-lime-400 to-lime-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg py-2.5 text-center mr-2 mb-2 ' 
          type="submit" onClick={VerificarLogin} >Ingresar</button>
        </form>
      </div>
      <div>
      <table className=' sm:rounded-lg w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope="col" className="text-center px-6 py-3 text-xl">ID</th>
              <th scope="col" className="text-center px-6 py-3 text-xl">CEDULA</th>
              <th scope="col" className="text-center px-6 py-3 text-xl">NOMBRE</th>

            </tr>
          </thead>
          <tbody>
            
            {usuarios.map((usuarios) => (
              <tr className="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600" key={usuarios.username}>
                <td className='border border-lime-900 text-center text-lg'>{usuarios.username}</td>
                <td className='border border-lime-900 text-center text-lg'>{usuarios.password}</td>
                <td className='border border-lime-900 text-center text-lg '>{usuarios.rol}</td>


               
              </tr>
            ))}
            
            
          </tbody>
        </table>
      </div>

      <div>
                          
      </div>

    </div>
  );
};

export default Login;

