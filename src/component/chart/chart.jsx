import React,{ useState,useEffect} from 'react'
import {fetchDailyData} from "../../api/api"


import {Line,Bar} from "react-chartjs-2"

const Chart = ({data:{confirmed,recovered,deaths},country}) =>{
    const [dailyData,setDailyData] = useState([]);


useEffect(() => {
    const apiData = async() => {
       setDailyData(await fetchDailyData());
    }
    apiData();
},[])
console.log(country)
const lineChart =(
    dailyData[0]?
    <Line 
        data={{
            labels:dailyData.map(({date}) => date),
            datasets:[{
                data:dailyData.map(({confirmed}) => confirmed),
                label:"Infected",
                borderColor:"#3333ff",
                fill:true
            },{
                data:dailyData.map(({deaths}) => deaths),
                label:"Deaths",
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true
            }],
        }}

    />: null
)

const barchart = (
    confirmed ?
    <Bar
        data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                label:"People",
                backgroundColor:[
                    'rgb(255, 145, 0)',
                    'rgb(4, 119, 48)',
                    'rgba(255, 0, 0, 0.938)'
                ],
                data:[confirmed.value,recovered.value,deaths.value]
            }]
        }}

        options ={{
            legend:{display:false},
            title:{display:true,title:`Current state in ${country}`}
        }}
    />
    : null
)

    return (
        <div>
          
          {country ? barchart : lineChart}
        </div>
    )
}

export default Chart
