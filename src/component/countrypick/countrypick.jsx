import React,{useState,useEffect} from 'react'
import {fetchCountries} from "../../api/api"
const Countrypick = ({handelcountrychange}) =>{
    const [fetchcountry,setCountry] = useState([])

    useEffect(() => {
       const apiData = async () =>{
           setCountry(await fetchCountries())
       }
       apiData();
    }, [setCountry])

    return (
        <div>
           <select onChange={(e)=>handelcountrychange(e.target.value)}>    
           <option value="" >Global</option>           
    {fetchcountry.map((data,i) => <option key={i} value={data}>{data}</option>)}
           </select>
        </div>
    )
}

export default Countrypick
