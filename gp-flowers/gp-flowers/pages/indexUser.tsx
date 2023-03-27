import React from 'react';


function App() {
    return (
        <div className='flex justify-center w-full h-screen items-center bg-gradient-to-r from-lime-500 to-cyan-500'>
            {/*<div className='flex items-start'>
                <img src={'../assets/images/logo.png'} alt="" />
    </div>*/}
            <div className='flex flex-col justify-center  items-center'>
                <button type="button" className="text-4xl font-bold bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 rounded-lg px-5 py-2.5 text-center mr-2 mb-2">GESTION FLOR</button>
                <button type="button" className="text-4xl font-bold bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg px-5 py-2.5 text-center mr-2 mb-2">ALMACEN</button>
                <button type="button" className="text-4xl font-bold bg-gradient-to-br from-blue-600 to-green-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 rounded-lg px-5 py-2.5 text-center mr-2 mb-2">PROVEEDORES</button>
            </div>
        </div>

    );
}

export default App;
