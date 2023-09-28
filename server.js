import express from 'express'
import { engine } from "express-handlebars"
import 'dotenv/config'
const port = process.env.PORT
const app = express()

//! Cofiguracion del template engine
app.engine('hbs', engine({
    defaultLayout: "main",
    extname: ".hbs"
}))
// ! Seteamos el motor de plantillas
app.set('view engine', 'hbs')

// ! Seteo la carpeta donde van a estar las plantillas
app.set('views', './views')

//? Middleboard que me permite habilitar la carpeta publica
app.use(express.static("public"))

app.get('/', (req, res) => {
    const data = {
        nombre: "maximiliano", titulo: "Bienvenidos a la pagina home"
    }
    res.render('home', data) // Primer argumento recibe la view, Segundo argumento recibe si o si un OBJETO
})

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
})


// 2:14



