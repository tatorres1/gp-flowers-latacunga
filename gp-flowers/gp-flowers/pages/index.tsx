
import Login from '../pages/login';
import Almacen from './almacen/gestion_almacen';
import Proveedores from './proveedores/gestion_proveedores';
import Reportes from './reportes/reportes';
import Reportes_admin from './reportes/reportes_admin';
//import '../pages/login'


const Home = () => {
  return (
    <div>


      {//<Login />
      //<Reportes_admin/>
      //<Proveedores/>
      //<Almacen/>
      <Reportes_admin/>
      
       }
       {
        <Reportes/>
       }
       {<Almacen/>}
       {<Proveedores/>}
      

      
      
    </div>
    
  );
};

export default Home;
