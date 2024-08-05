import { EjemploProps1, EjemploProps2,EjemploProps3, EjemploProps4,EjemploProps5} from "../components/Props";

const nombre2= 'Ornella';
const frutas=['manzanas','bananas','palta','naranja']
const equipos=['Argentina','colombia','Uruguay','canada']
const mostrarValor =valor =>{
    console.log(valor)
}
const Ejemplo1 =(props) =>{
    return(
        <div>
            <h1>Ejemplos de Propiedades</h1>
            <EjemploProps1 nombre='Orne'/>
            <EjemploProps1 nombre ={nombre2}/>
            {/* listar ekementos(array) */}
            <EjemploProps2 elementos={frutas}/>
            <EjemploProps2 elementos={equipos}/>
            {/* varias propiedades */}
            <EjemploProps3 titulo="Hola soy el titutlo" subtitulo='subtitulo bien grande!' cuerpo='Hola el contenido es de esta noticia'/>
            {/* funcion*/}
            <EjemploProps4 cambiarvalor={mostrarValor} />
            {/* este no anda xq si o si necesita de cambiar valor */}
            <EjemploProps4/>
            {/* como lo requiere entonces oe podemos pasar una vacia */}
            <EjemploProps4 cambiarvalor={()=> {}}/>
            <EjemploProps5 eventoClick={mostrarValor}/>
            {/* si no le coloque la props eventoClick ni se exploto react a diferencia del ejemplo4 */}
            <EjemploProps5/>
        </div>
    )
}

export default Ejemplo1;