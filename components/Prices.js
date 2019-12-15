

class Prices extends React.Component {
    state = {
      currency: 'USD'
    }
  
    render() {
  
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

          <div className="cryptocmc">
                <ul className="list-group">
                    <li className="list-group-item"> price for {this.props.cmc.data[0].name} : {  }
                        <span className="badge badge-primary"> USD </span>
                        <strong>    {this.props.cmc.data[0].quote.USD.price} </strong>

                    </li>
                </ul>

          </div>
        </div>
        
      );
    }
  }
  
  export default Prices;