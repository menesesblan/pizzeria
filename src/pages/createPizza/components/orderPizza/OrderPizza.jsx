import React, { useEffect, useState } from "react";
import StepButton from "../../../../components/StepButton/StepButton";
import { Container } from "./style";

const OrderPizza = ({  ContinueStep,PreviousStep, formStep}) =>{
    let pizza = [{
        id:'',
        name:'',
        price:''
    }]

    let client = [{
        customer_name:'',
        date:'',
        phone:'',
        pizza_name:'',
        pizza_price:''
    }]

    const [dataPizza, setDataPizza] = useState(pizza);
    const [dataClient, setDataClient]=useState(client);
    
    useEffect(()=>{
        let jsonPizzaText=localStorage.getItem('Pizza')
        let jsonPizza=JSON.parse(jsonPizzaText)
        setDataPizza(jsonPizza)

        let jsonClientText=localStorage.getItem('cliente')
        let jsonClient=JSON.parse(jsonClientText)
        setDataClient(jsonClient)
    }, [])

    const saveData = () =>{
        alert("Guardado")
    }

    return (
        
        
        <Container>
        <h1 className="title2">Confirmar Pedido</h1>
            <div>
                <h5>Datos de la pizza</h5>
                <p>Ingredientes:</p>
                {dataPizza.map((data)=>(
                    <div key={data.id}>
                        <p>Nombre: {data.name}</p>
                        <p>Price: {data.price}</p>
                    </div>
                ))}
            </div>
            <div>
                <h5>Datos del cliente</h5>
                {dataClient.map((data)=>(
                    <div>
                        <p>Nombre: {data.customer_name}</p>
                        <p>telefono: {data.phone}</p>
                        <p>Nombre de la pizza: {data.pizza_name}</p>
                        <p>Precio de la pizza: {data.pizza_price}</p>
                    </div>
                ))}
            </div>
           <StepButton
           ContinueStep={saveData}
           PreviousStep={PreviousStep}
           formStep={formStep}
           className={"footer"}/>
       
        </Container>
        
    )
}

export default OrderPizza;