import { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import rowFactura from "../../components/rowFactura";



const Facturacion: React.FC = () => {



  


  const [valorTotalPices, setValorTotalPices] = useState(Number);
  const [valorNumeroBunches, setValorNumeroBunches] = useState(Number);
  const [valorStemsPerBunch, setValorStemsPerBunch] = useState(Number);
  const [valorUnitPrice, setValorUnitPrice] = useState(Number);
  
  const asignarTotalPices = event => {
    setValorTotalPices(event.target.value);
  }

  const asignarStemsPerBunch = event => {
    setValorStemsPerBunch(event.target.value);
  }

  const asignarNumeroBunches = event => {
    setValorNumeroBunches(event.target.value);
  }

  const asignarUnitPrice = event => {
    setValorUnitPrice(event.target.value);
  }


  const numTimes = 5;
  const myVariable = valorTotalPices;

  const htmlCode = <tbody>
  <tr className="bg-white border-b" >
    <td className='border border-lime-900 text-center text-lg'>
    <select id="countries" class="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected></option>
        <option value="US">FB</option>
        <option value="CA">HB</option>
        <option value="FR">QB</option>
      </select>
    </td>
    <td className='border border-lime-900 text-center text-lg'>
      <input value={valorTotalPices} onChange={asignarTotalPices}></input>
    </td>
    <td className='border border-lime-900 text-center text-lg '>
      <label>{valorTotalPices/2}</label>
    </td>
    <td className='border border-lime-900 text-center text-lg '>
      <select id="countries" class="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected></option>
        <option value="US">FREEDOM</option>
        <option value="CA">BLUE</option>
        <option value="FR">RAINBOW</option>
      </select>
    </td>
    <td className='border border-lime-900 text-center text-lg '>
      <select id="countries" class="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected></option>
        <option value="US">40 cm</option>
        <option value="CA">50 cm</option>
        <option value="FR">60 cm</option>
        <option value="CA">70 cm</option>
        <option value="CA">80 cm</option>
        <option value="CA">90 cm</option>
        <option value="CA">100 cm</option>
      </select>
    </td>
    <td className='border border-lime-900 text-center text-lg'>
      <input value={valorNumeroBunches} onChange={asignarNumeroBunches}></input>
    </td>
    <td className='border border-lime-900 text-center text-lg'>
      <input value={valorTotalPices} onChange={asignarTotalPices}></input>
    </td>
    <td className='border border-lime-900 text-center text-lg '>
      <input value={valorTotalPices} onChange={asignarTotalPices}></input>
    </td>
    <td className='border border-lime-900 text-center text-lg '>
      <label>{valorNumeroBunches*valorStemsPerBunch}</label>
    </td>
    <td className='border border-lime-900 text-center text-lg '>
      <input value={valorStemsPerBunch} onChange={asignarStemsPerBunch}></input>
    </td>
    <td className='border border-lime-900 text-center text-lg'>
      <input value={valorUnitPrice} onChange={asignarUnitPrice}></input>
    </td>
    <td className='border border-lime-900 text-center text-lg'>
      <label>{valorUnitPrice*valorStemsPerBunch*valorNumeroBunches}</label>
    </td>
  </tr>



</tbody>;

  const renderHtmlCode = () => {
    return htmlCode;
  };

  function renderHtmlMultipleTimes(){
    for (let i = 0; i < 3; i++) {
      return htmlCode;
    }
  };

  return (
    <Fragment>
    <div>
      <div className='w-full flex flex-col text-xl items-center bg-green-100 rounded-lg'    >
        {/*seccion titulo*/}
        <div className='p-6'>
          <h5 className='text-4xl font-bold'>COMERCIAL INVOICE 1099</h5>
        </div>
        {/*seccion cabecera*/}
        <div className='flex flex-col-2'>
          <div className='pr-12'>
            <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">Shipper Name and Address</label>
            <a class="flex flex-col items-center mb-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">GP FLOWERS/MARIN CHACON PATRICIA</h5>
                    <div>
                      <h5 class="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">Cotopaxi-Ecuador</h5>
                      <h5 class="mb-2 text-xs tracking-tight text-gray-900 dark:text-white">Phone: (593) 984342413</h5>
                    </div>                  
                    <p class="mb-2 text-xs tracking-tight text-gray-900 dark:text-white">e_mail: paty_gpflowers@hotmail.com</p>
                </div>
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={'../assets/images/gp_flowers.jpg'} alt=""/>
            </a>
            <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">Marketing Name</label>
            <input type="text" id="first_name" class="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
            <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">Consignee Name and Address</label>
            <a class="flex flex-col p-6 bg-white border border-gray-200 shadow md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
                <div class="flex flex-row items-center justify-between pb-4 leading-normal">
                    <label for="first_name" class="block text-sm w-1/5 font-medium text-gray-900 dark:text-white">CLIENTE:</label>
                    <input type="text" id="last_name" class="bg-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>
                <div class="flex flex-row items-center justify-between pb-4 leading-normal">
                    <label for="first_name" class="block text-sm w-2/5 font-medium text-gray-900 dark:text-white">MARCACION:</label>
                    <input type="text" id="last_name" class="bg-gray-50 w-4/7 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>
                <div class="flex flex-col justify-between leading-normal">
                    <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">País</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Escoja un País</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                </div>
            </a>
            <div className='flex flex-row items-center pt-6'>
                    <div className='flex flex-col w-1/7 mr-6 items-center'>
                      <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Consignment</label>  
                    </div>
                    <div className='flex flex-col w-2/5 items-center'>
                      <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    </div>
            </div>
          </div>
          <div>
              <div class="grid mb-6 md:grid-cols-2">
                <div>
                    <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">Farm Code</label>
                    <input type="text" id="first_name" class="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="GP" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Date</label>
                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="23/02/2022" required/>
                </div>
                <div>
                    <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">INCOTERM</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="FCA-UIO" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Country Code</label>
                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="EC" required/>
                </div>
              </div>
              <div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">MAWB No.</label>
                    <input type="text" id="last_name" class="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="14509595784" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">HAWB</label>
                    <input type="text" id="last_name" class="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="893896" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Air Line</label>
                    <input type="text" id="last_name" class="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Currier & Freight Forwarder</label>
                    <select id="countries" class="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Escoja VALUE CARGO</option>
                      <option value="US">VALUE CARGO1</option>
                      <option value="CA">VALUE CARGO2</option>
                      <option value="FR">VALUE CARGO3</option>
                      <option value="DE">VALUE CARGO4</option>
                    </select>
                </div>
              </div>
              <div class="grid md:grid-cols-2">
                <div>
                    <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">R.U.C. No.</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0502401011001" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">No EMBARQUE</label>
                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>
                <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">DAE No.005-2023-40-00139723</label>
              </div>    
          </div>
        </div>

      </div>
        {/*seccion cuadricula*/}
        <div className='flex flex-column m-14 w-1/2'>
          <table className=' sm:rounded-lg text-sm text-left text-black bg-white '>
            <thead className='text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope="col" className="text-center px-6 py-3 text-xl">PICES TYPE</th>
                <th scope="col" className="text-center px-6 py-3 text-xl">TOTAL PICES</th>
                <th scope="col" className="text-center px-6 py-3 text-xl">EQ.FULL BOXES</th>
                <th scope="col" className="text-center px-6 py-3 text-xl">PRODUCT ROSAS</th>
                <th scope="col" className="text-center px-6 py-3 text-xl">LONGITUD</th>
                <th scope="col" className="text-center px-6 py-3 text-xl"># bunches</th>
                <th scope="col" className="text-center px-6 py-3 text-xl">HTS</th>
                <th scope="col" className="text-center px-6 py-3 text-xl">NANDINA</th>
                <th scope="col" className="text-center px-6 py-3 text-xl">TOTAL STEMS</th>
                <th scope="col" className="text-center px-6 py-3 text-xl">STEMS/BUNCH</th>
                <th scope="col" className="text-center px-6 py-3 text-xl">UNIT PRICE</th>
                <th scope="col" className="text-center px-6 py-3 text-xl">TOTAL VALUE USD.</th>
              </tr>
            </thead>
            {renderHtmlMultipleTimes()}
            {renderHtmlMultipleTimes()}
            {renderHtmlMultipleTimes()}
            {renderHtmlMultipleTimes()}
            {renderHtmlMultipleTimes()}
            {renderHtmlMultipleTimes()}
            {renderHtmlMultipleTimes()}
            {renderHtmlMultipleTimes()}
            {renderHtmlMultipleTimes()}
            {renderHtmlMultipleTimes()}
          </table>
        </div>

        {/*seccion pie*/}
        <div className='flex flex-col-2'>
                <div className='m-12 w-1/2'>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Name and Title of person Preparing Invoice</label>
                    <input type="text" id="last_name" class="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>
                <div className='m-12'>
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-3xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <span class="relative px-5 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          GUARDAR
                      </span>
                    </button>                
                </div>
        </div>
        <div className='flex flex-col-2'>
                <div className='ml-12 w-1/2'>
                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    <label for="last_name" class="bg-rose-300 border-black border-2 pl-12 block text-sm font-medium text-gray-900 dark:text-white">CUSTOM USE ONLY</label>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">The flowers and plants on this invoice where wholly grown in ECUADOR</label>
                </div>
                <div className='ml-12 w-1/2'>
                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    <label for="last_name" class="bg-rose-300 border-black border-2 pl-12 block text-sm font-medium text-gray-900 dark:text-white">USDA, APHIS, P.P.Q. Use Only</label>
                </div>
        </div>
    </div>

      


    


    </Fragment>
    
  );

};

export default Facturacion;