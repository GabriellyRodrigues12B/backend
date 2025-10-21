import express, { request, response } from "express"
import cors from "cors"
import { persons } from "./persons.js"


const app = express()
const port = 3333


app.use(cors())
app.use(express.json())
//GET, POST, PATCH, PUT E DELETE => metodos HTTP
app.get ("/", (request, response) => {
    response .json (persons)

})

app:post("/cadastrar",(request, response) => {
    const { user } = request.body
    
    console.log (user)

    response.status(201).json ({ message: "Usuario cadastrado com sucesso!"})

})

app.listen(port, () =>{
console.log(`Servidor rodando na porta" ${port}!`)


})
