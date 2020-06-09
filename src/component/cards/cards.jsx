import React from 'react'
import Countup from "react-countup"
import cn from "classnames"
import style from "./cards.module.css"

const cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed) return <h1>Loading....</h1>
    return (
        <div className={style.records}>
            Data Recored upto date : {new Date(lastUpdate).toDateString()}
            <div className={style.items}>
           <div className={cn(style.card,style.infected)}>
                <h1>Infected</h1>
                <Countup start={0} end={confirmed.value} duration={2.5} separator=","/>                 
                <p>Numer of peoples are affected</p>
           </div>
           <div className={cn(style.card,style.recoved)}>
                <h1>Recoved</h1>
                <Countup start={0} end={recovered.value} duration={2.5} separator=","/>                 
                <p>Numer of peoples are recovery</p>
           </div>
           <div className={cn(style.card,style.deaths)}>
                <h1>Deaths</h1>
                <Countup start={0} end={deaths.value} duration={2.5} separator=","/>                 
                <p>Numer of peoples are deaths</p>
           </div>
           </div>
        </div>
    )
}

export default cards
