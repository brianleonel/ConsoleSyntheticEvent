/**/import { MouseEvent } from "react"
interface PropV{
    data: string[]
}
function User({data}: PropV){
    const handleClick=(e: MouseEvent)=>{
        console.log(e)
    }
     return(<ul>
        {data.map((elem)=>(<li onClick={handleClick}>{elem}</li>))}
        </ul>);
   /*SyntheticEvent es un objeto que contiene un evento de un navegador, 
   esto facilita el comportamiento unifome en los navegadores*/
}
export default User