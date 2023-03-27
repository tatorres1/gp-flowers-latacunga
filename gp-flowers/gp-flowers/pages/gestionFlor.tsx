import { useState } from 'react';
import React from 'react';

interface Data {
    cantidad: number;
    proveedor: string;
    variedad: string;
    tMallas: number;
    tTallosMalla: number;
    tallosSueltos: number;
    tTallos: number;
    tCuarenta: number;
    tCincuenta: number;
    tSesenta: number;
    tSetenta: number;
    tOchenta: number;
    tNoventa: number;
    tBonches: number;
    tNacional: number;
    tallosSobrantes: number;
    tVariedad: number;
}

const Flor = () => {
    const [data, setData] = useState<Data[]>([
        { cantidad: 1, proveedor: "Sonia Quinaluisa", variedad: 'BRIGHTON', tMallas: 6, tTallosMalla: 25, tallosSueltos: 0, tTallos: 150, tCuarenta: 0, tCincuenta: 0, tSesenta: 1, tSetenta: 0, tOchenta: 0, tNoventa: 0, tBonches: 1, tNacional: 121, tallosSobrantes: 4, tVariedad: 150 },

    ]);

    return (
        {/*
        <div>

            <div>
                <button>insertar nuevo</button>
            </div>

            <table className="hover:table-fixed">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>PROVEEDOR</th>
                        <th>VARIEDAD</th>
                        <th>T. MALLAS</th>
                        <th>T. TALLOS x MALLA</th>
                        <th>TALLOS SUELTOS</th>
                        <th>T. TALLOS</th>
                        <th>40</th>
                        <th>50</th>
                        <th>60</th>
                        <th>70</th>
                        <th>80</th>
                        <th>90</th>
                        <th>T. BONCHES</th>
                        <th>T. NACIONAL</th>
                        <th>TALLOS SOBRANTES</th>
                        <th>T. VARIEDAD</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr key={row.cantidad}>
                            <td>{row.cantidad}</td>
                            <td>{row.proveedor}</td>
                            <td>{row.tMallas}</td>
                            <td>{row.tTallosMalla}</td>
                            <td>{row.tallosSueltos}</td>
                            <td>{row.tTallos}</td>
                            <td>{row.tCuarenta}</td>
                            <td>{row.tCincuenta}</td>
                            <td>{row.tSesenta}</td>
                            <td>{row.tSetenta}</td>
                            <td>{row.tOchenta}</td>
                            <td>{row.tNoventa}</td>
                            <td>{row.tBonches}</td>
                            <td>{row.tNacional}</td>
                            <td>{row.tallosSobrantes}</td>
                            <td>{row.tVariedad}</td>
                            <td><button>EDITAR</button></td>
                            <td><button>ELIMINAR</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>*/
                        

    );
};

export default Flor;