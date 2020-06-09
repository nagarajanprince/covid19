import axios from "axios"
const baseUrl ="https://covid19.mathdro.id/api"


export const fetchData = async(country) =>{
    let changeurl = baseUrl;
    if(country){
            changeurl =`${baseUrl}/countries/${country}`
    }
    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeurl)
        const modefieddata ={confirmed,recovered,deaths,lastUpdate}
        return modefieddata
    }catch(error){
        console.log("API Error: "+error)
    }
    
}

export const fetchDailyData = async() =>{
    try{
        const {data} = await axios.get(`${baseUrl}/daily`);
        const modifedData = data.map( (dailyData) => ({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }))
        return modifedData
    }
    catch(error){
        console.log("Daily data: "+error)
    }
}


export const fetchCountries = async() =>{
    try{
        const {data:{countries}} = await axios.get(`${baseUrl}/countries`)       
        return countries.map((country) => country.name);
    }
    catch(error){
        console.log("API Error :"+error)
    }
}


