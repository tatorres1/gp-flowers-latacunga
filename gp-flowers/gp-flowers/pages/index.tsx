
import Login from '../pages/login';
import Almacen from './almacen/gestion_almacen';
import Proveedores from './proveedores/gestion_proveedores';
import Reportes from './reportes/reportes';
import Reportes_admin from './reportes/reportes_admin';
//import '../pages/login'


const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
       
      <h1 className="text-3 xl font-bold underline text-red-600">
      Simple React Typescript Tailwind Sample
    </h1>

      {//<Login />
      //<Reportes_admin/>
      //<Proveedores/>
      //<Almacen/>
      //<Reportes_admin/>
      <Reportes/>
       }
      

      
      
    </div>
    
  );
};

export default Home;
