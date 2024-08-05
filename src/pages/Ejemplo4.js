import alumnos from '../data/alumnos.json';



const CargajSon =(props)=>{
console.log(alumnos)
    return(
        <>
        <h1>Ejemplo carga de Json</h1>
        <ul>
            {
                alumnos.map(alumnos=>(
                    <li key={alumnos.id}>{alumnos.id}: {alumnos.nombre} {alumnos.apellido} - {alumnos.edad}</li>
                ))
            }
        </ul>
        </>
    )
}

export default CargajSon;