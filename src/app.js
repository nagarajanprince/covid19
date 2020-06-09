import React, { Component } from 'react'

import {Cards,Chart,Countrypick  } from "./component";

import {fetchData} from "./api/api"

import styles from  "./css/style.module.css";

class app extends Component {
    state ={
        data:{},
        country:''
    }
    async componentDidMount(){
        const apiData = await fetchData()  
        this.setState({
            data:apiData
        })
    }

    handelcountrychange = async(country) =>{
        const apiData = await fetchData(country);
        this.setState({
            data:apiData,
            country:country
        })
    }
    render() {
        const {data,country} = this.state
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <Countrypick handelcountrychange={this.handelcountrychange}/>
               
                <Chart data={data} country={country}/>                
            </div>
        )
    }
}

export default app
