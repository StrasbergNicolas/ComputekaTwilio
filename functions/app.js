messageComputeka = async (compra) => {
    const client = new twilio.Twilio(compra.user,compra.password);

    // Envía un mensaje SMS
    const message = await client.messages.create({
        body: 'Gracias por elegirnos',
        from: '+17632251050',
        to: '+1126415737',
    });

    return { statusCode: 200, body: JSON.stringify(message) };
};

const twilio= require("twilio")
const serverless = require('serverless-http')
const router = express.Router()
const express = require('express')
const app = express()
const port = 3000

let records = []


router.get('/', (req, res) => {
    //const lenguaje = req.params.phone;
    //messageComputeka()
    res.send('Bienvenidos al servidor de computeka!')
})

router.get('/:product', (req, res) => {
    const compra = req.params.product;
    messageComputeka(compra)
    res.send(`Gracias por elegir su producto, esperemos que le alla gustado nuestros servicios`)
})

router.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

router.use('/.netlify/functions/api', router)
module.exports.handler = serverless(app)