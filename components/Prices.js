

class Prices extends React.Component {
    state = {
      currency: 'USD'
    }

    //component: price of the cyptocurrencies; return the table with JSX; 
    cryptoLoop = () => {
      let table = []
      let n = this.props.cmc.data.length

      for(let i = 0; i <= n-1; i++) {
          table.push(
             <div className="cryptocmc" key= {this.props.cmc.data[i].id}>
                <ul className="list-group">
                    <li className="list-group-item"> Price for {this.props.cmc.data[i].name} : {  }
                        <span className="badge badge-primary"> USD </span>
                        <strong>    {this.props.cmc.data[i].quote.USD.price} </strong>

                        <span className="badge badge-success"> VOLUME 24H:  </span>
                        <strong>    {this.props.cmc.data[i].quote.USD.volume_24h} </strong>

                    </li>
                </ul>
               
          </div>
          )
      }
      return table
    }


    

    //render the component 
    render() {

        console.log('totale iki:' + this.props.cmc.data.length)
      return (
        <div>
          <ul className="list-group">
            <li className="list-group-item">Bitcoin rate for  {this.props.bpi[this.state.currency].description} : { }
            <span className="badge badge-primary">  {this.props.bpi[this.state.currency].code}  </span> 
            <strong>   {this.props.bpi[this.state.currency].rate}  </strong>
          </li>
          </ul>
          <br/>
          <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
          
          <br/>

          <p>Also Check current Another cryptocurrencies Price: </p>
          
          {/* render the cyptoLoop component */}
          <div>
              {this.cryptoLoop()}
          </div>

        
          
        </div>
        
      );
    }
  }
  
  export default Prices;