
const express = require('express')
const app = express()
const fs = require('fs')
const PORT = 8080;
const {Contenedor} = require('./contenedor.js')
const productos = new Contenedor('productos.txt')

/*
const guardar = ()=>{
    productos.save(
        {
            title: "cartera bordada loto",
            price: 5000,
            thumbnail: "https://http2.mlstatic.com/D_NQ_NP_744507-MLA48034890646_102021-O.jpg"
        }
    )
}
guardar()
*/

 app.get('/productos', async (req, res) => {
        const listadoProductos = await productos.getAll();
        res.send({productos: listadoProductos })
 })
 

app.get('/productoRandom', async (req, res)=>{
    const listadoProductos = await productos.getAll()
    let numero =  Math.floor(Math.random() * listadoProductos.length);
    console.log(numero)
    let producto = listadoProductos[numero];
    res.send({productoRandom: producto})
})


const server = app.listen(PORT, ()=>{
    console.log(`servidor andando en puerto ${PORT}`)
    })