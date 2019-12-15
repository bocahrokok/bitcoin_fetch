
import React, { useState} from 'react';
import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';
import Price from '../components/Prices';
// const rp = require('request-promise');
// import rp from 'request-promise'


function App (props) {
    const [data, setData] = useState({ hits: [] }); 

    return(
    <Layout>
        <div>
            <h1> Welcome to Bitzprice</h1>       
            <p>Check current Bitcoin Repo Rate: </p>
            <Price bpi= {props.bpi} cmc= {props.cmc}/>

           
            
        </div>
    </Layout>)
}


App.getInitialProps = async function (){
    const res =  await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json()

    const apiKey = 'f2b2d0f3-dc44-4a31-86b2-f851da69ac54'
    let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", 
    qString = "?CMC_PRO_API_KEY=" + apiKey + "&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=USD"

    const res2 = await fetch(url + qString, { mode: "no-cors" })
    const data2 = await res2.json()

    console.log(data2.data)
    
    


    return  {
        bpi:  data.bpi,
        cmc: data2


    }
}






export default App;

