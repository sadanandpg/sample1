import { useSelector } from "react-redux";
import { getemployees } from "./counterSlice";


const Contacts = () => {
    const n=useSelector(getemployees);
    return ( 
        <h1>Contacts : {n}</h1>
     );
}
 
export default Contacts;