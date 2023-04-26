import { query } from "@/lib/database";

export default async function handler(req, res){


    let message;

    if(req.method === "GET"){

        const contenido_facturacion = await query(
            {
                query: "SELECT * FROM contenido_facturacion",
                values: [],
            }
        );
        res.status(200).json({contenido_facturacion: contenido_facturacion});
    }

    

    if(req.method === "POST"){
        const PicesTypeContFacturacion = req.body.picesType_contFacturacion;
        const TotalPicesContFacturacion = req.body.totalPices_contFacturacion;
        const EqFullBoxesContFacturacion = req.body.eqFullBoxes_contFacturacion;
        const ProductRosasContFacturacion = req.body.productRosas_contFacturacion;
        const LongitudContFacturacion = req.body.longitud_contFacturacion;
        const NoBunchesContFacturacion = req.body.noBunches_contFacturacion;
        const IndicatorContFacturacion = req.body.indicator_contFacturacion;
        const HtsContFacturacion = req.body.hts_contFacturacion;
        const NandinaContFacturacion = req.body.nandina_contFacturacion;
        const TotalStemsContFacturacion = req.body.totalStems_contFacturacion;
        const StemsPerBunchContFacturacion = req.body.stemsPerBunch_contFacturacion;
        const UnitPriceContFacturacion = req.body.unitPrice_calFacturacion;
        const TotalValueContFacturacion = req.body.totalValue_calFacturacion;
        

        const addFacturacion = await query({
            query: "INSERT INTO datos_facturacion (marketingName_calFacturacion, cliente_calFacturacion, marcacion_calFacturacion, pais_calFacturacion, consignment_calFacturacion, farmCode_calFacturacion, date_calFacturacion , incoterm_calFacturacion, countryCode_calFacturacion, mawb_calFacturacion, hawb_calFacturacion , airLine_calFacturacion, currierFreight_calFacturacion, ruc_calFacturacion , noEmbarque_calFacturacion, personInvoice_calFacturacion , invoice_calFacturacion, usdaOnly_calFacturacion) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",              
            values: ([MarketingNameFacturacion,
                ClienteFacturacion,
                MarcacionFacturacion,
                PaisFacturacion,
                ConsignmentFacturacion,
                FarmCodeFacturacion,
                DateFacturacion,
                IncotermFacturacion,
                CountryCodeFacturacion,
                MawbFacturacion,
                HawbFacturacion,
                AirLineFacturacion,
                CurrierFreightFacturacion,
                RucFacturacion,
                NoEmbarqueFacturacion,
                PersonInvoiceFacturacion,
                InvoiceFacturacion,
                UsdaOnlyFacturacion
            ]),
        });

        if(addFacturacion.insertId){
            message = "success";
        } else {
            message = "error";
        }
        let proveedor = {
            //id_proveedor: addProveedor.insertId,
            id_proveedor: addProveedor.insertId,
            cedula_proveedor: cedulaProveedor,
            nombre_proveedor: nombreProveedor,
            telefono_proveedor: telefonoProveedor,
            observaciones_proveedor: observacionesProveedor,  
        };
        res.status(200).json({response: {message: message, proveedor: addProveedor}});
    }

    if(req.method === "PUT"){

        const idFacturacion = req.body.id_calFacturacion;
        const MarketingNameFacturacion = req.body.marketingName_calFacturacion;
        const ClienteFacturacion = req.body.cliente_calFacturacion;
        const MarcacionFacturacion = req.body.marcacion_calFacturacion;
        const PaisFacturacion = req.body.pais_calFacturacion;
        const ConsignmentFacturacion = req.body.consignment_calFacturacion;
        const FarmCodeFacturacion = req.body.farmCode_calFacturacion;
        const DateFacturacion = req.body.date_calFacturacion;
        const IncotermFacturacion = req.body.incoterm_calFacturacion;
        const CountryCodeFacturacion = req.body.countryCode_calFacturacion;
        const MawbFacturacion = req.body.mawb_calFacturacion;
        const HawbFacturacion = req.body.hawb_calFacturacion;
        const AirLineFacturacion = req.body.airLine_calFacturacion;
        const CurrierFreightFacturacion = req.body.currierFreight_calFacturacion;
        const RucFacturacion = req.body.ruc_calFacturacion;
        const NoEmbarqueFacturacion = req.body.noEmbarque_calFacturacion;
        const PersonInvoiceFacturacion = req.body.personInvoice_calFacturacion;
        const InvoiceFacturacion = req.body.invoice_calFacturacion;
        const UsdaOnlyFacturacion = req.body.usdaOnly_calFacturacion;


        const updateFacturacion = await query({

            query: "UPDATE datos_facturacion SET marketingName_calFacturacion=?, cliente_calFacturacion=?, marcacion_calFacturacion=?, pais_calFacturacion=?, consignment_calFacturacion=?, farmCode_calFacturacion=?, date_calFacturacion=?, incoterm_calFacturacion=?, countryCode_calFacturacion=?, mawb_calFacturacion=?, hawb_calFacturacion=?, airLine_calFacturacion=?, currierFreight_calFacturacion=?, ruc_calFacturacion=?, noEmbarque_calFacturacion=?, personInvoice_calFacturacion=?, invoice_calFacturacion=?, usdaOnly_calFacturacion=? WHERE id_calFacturacion=?",
            values: ([MarketingNameFacturacion,ClienteFacturacion,MarcacionFacturacion, PaisFacturacion, ConsignmentFacturacion, FarmCodeFacturacion, DateFacturacion, IncotermFacturacion, CountryCodeFacturacion, MawbFacturacion, HawbFacturacion, AirLineFacturacion, CurrierFreightFacturacion, RucFacturacion, NoEmbarqueFacturacion, PersonInvoiceFacturacion, InvoiceFacturacion, UsdaOnlyFacturacion, idFacturacion ]),
                         
        });

        //indicar varias constantes para la actualizacion de variables mediante query,
        //primero revisar el tutorial para ver si realmente funciona
        
        const result = updateFacturacion.affectedRows;
        if(result){
            message = "success";
        } else {
            message = "error";
        }
        let facturacion = {
            id_calFacturacion: idFacturacion,
            marketingName_calFacturacion: MarketingNameFacturacion,
            cliente_calFacturacion:  ClienteFacturacion,
            marcacion_calFacturacion: MarcacionFacturacion,
            pais_calFacturacion: PaisFacturacion,
            consignment_calFacturacion: ConsignmentFacturacion,
            farmCode_calFacturacion: FarmCodeFacturacion,
            date_calFacturacion: DateFacturacion,
            incoterm_calFacturacion: IncotermFacturacion,
            countryCode_calFacturacion: CountryCodeFacturacion,
            mawb_calFacturacion: MawbFacturacion,
            hawb_calFacturacion: HawbFacturacion,
            airLine_calFacturacion: AirLineFacturacion,
            currierFreight_calFacturacion: CurrierFreightFacturacion,
            ruc_calFacturacion: RucFacturacion,
            noEmbarque_calFacturacion: NoEmbarqueFacturacion,
            personInvoice_calFacturacion: PersonInvoiceFacturacion,
            invoice_calFacturacion: InvoiceFacturacion,
            usdaOnly_calFacturacion: UsdaOnlyFacturacion,  
        };
        res.status(200).json({response: {message: message, proveedor: facturacion}});
    }
    

    if (req.method === "DELETE") {
        const idFacturacion = req.body.id_calFacturacion;
        const deleteFacturacion = await query({
          query: "DELETE FROM datos_facturacion WHERE id_calFacturacion = ?",
          values: [idFacturacion],
        });
        const result = deleteFacturacion.affectedRows;
        if (result) {
          message = "success";
        } else {
          message = "error";
        }
        res.status(200).json({ response: { message: message, facturacion: facturacion } });
      }
}