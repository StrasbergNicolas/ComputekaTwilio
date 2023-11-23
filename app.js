const twilio= require("twilio")

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("Bienvenidos")
    res.send('Bienvenidos al servidor de computeka!')
})

app.get('/:phone', (req, res) => {
    const compra = req.params.phone;
    messageComputeka(compra)  
    res.send(`Gracias por elegir nuestro producto, esperemos que le alla gustado nuestros servicios`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


messageComputeka = async (compra) => {
    if (compra.phone){
        console.log(compra.phone)
        const client = new twilio.Twilio(compra.user,compra.password);
    
        // Envía un mensaje SMS
        const message = await client.messages.create({
            body: 'Gracias por elegirnos, somos Computeka',
            from: '+17732315309',
            to: compra.phone,
        });
    
        return { statusCode: 200, body: JSON.stringify(message) };
    };
}
    