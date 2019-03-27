console.log("//FUNCION")
factorial = num =>{
    if (num<=0) return 1
    else return (num * factorial(num-1))
}
console.log(factorial(6))

console.log("//NUMBER")
const tipo_cambio = new Number("9.1");
console.log(tipo_cambio.valueOf());
console.log(tipo_cambio.MAX_VALUE);

console.log("//OBJECT")
const alumno= {
    nombre: 'Efrain',
    apellido: 'Quisberth',
    func:()=>{return 'hola mundo'}
}

console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.func())

console.log("//BOOLEAN")
const val = new Boolean('true')
if (val) console.log('es verdadera')

console.log("//STRING")
const descripcion = new String('porcentaje 10%')
console.log(descripcion.toUpperCase())

console.log("//FORMAT SHOW")
const mensaje = () => {return 'plantilla'};
const parametro = '10%';
console.log(`el parametro ${parametro} de la ${mensaje} `)

console.log("//ARRAY SPLICE ADD")
const cursos = ['nodejs', 'angular', 'react', 'mongodb', 'sql'];
cursos.splice(2,0,'postgres');
console.log(cursos);

console.log("//ARRAY SPLICE DEL")
const eliminado = cursos.splice(3,1);
console.log(`${cursos} elemento eliminado: ${eliminado}`)

console.log("//ARRAY PUSH")
cursos.push('ms-sqlserver')
console.log(cursos)

console.log("//ARRAY FIND")
const curso = cursos.find(elem=>elem==='mongodb');
if(curso) console.log(`curso encontrado ${curso}`)

console.log("//FOR SIMPLE")
for(let i in cursos){
    console.log(cursos[i])
}
console.log("//FOR EACH")
cursos.forEach(curso =>  {
    console.log(curso)
})
console.log("//MAP")
cursos.map((curso,index)=>{
    console.log(index,curso)
})
console.log("//ARRAY FILTER")
const cursosSinSql = cursos.filter(curso => curso !== 'sql')
console.log(cursosSinSql)

console.log("//MAP DEFINED")
const roles = new Map([
    ['r1', 'Usuario'],
    ['r2', 'Invitado'],
    ['r3', 'Administrador']
])
console.log(roles.get('r2'))

console.log("//MAP ADVANCED VAR")
const  horarios = new Map();
horarios.set('0001',{curso:'nodejs',horario:'19:00-22:00'})
horarios.set('0002',{curso:'angular',horario:'07:00-09:00'})
horarios.set('0003',{curso:'react',horario:'12:00-14:00'})
console.log(horarios.get('0002'));

console.log("//FOR EACH MAP")
horarios.forEach(hora=>{
    console.log(hora)
});

let a=100;
let b=0;

console.log("TRY // CATCH")
try{
    if(b == 0){        
        throw('Divide 0 error');
    }else{
        let c = a/b;        
    }
}catch(e){
    console.log(`Error ${e}`)
}

console.log("//PARAM ...")
sum = (x,y,z) =>{
    return x + y + z;
}
const numbers = [1,2,3];
console.log(sum(...numbers));
const arr = [1,2,3]
const arr1 = [...arr]
arr1.push(4);
console.log(arr1)

const arr2 = [0,1,2]
const arr3 = [3,4,5]
arr2.push(...arr3)
console.log(arr2)

