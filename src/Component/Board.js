import React from 'react';
import axios from 'axios';
import Coin from './Coin.js';

class Board extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            coinList: [],
            limit : 30,
            currency : "EUR",
        }
    }

    getData = (limit, currency) => {
        var link = "https://api.coinmarketcap.com/v1/ticker/?limit=".concat(limit).concat("&convert=").concat(currency);
        console.log(link);
        axios.get(link)
        .then(res => {
            var coinList = res.data;
            this.setState({
                coinList,
            });
        })
    }

    componentWillMount(){
        setTimeout(this.getData(this.state.limit,this.state.currency), 0);
        setInterval(this.getData(this.state.limit,this.state.currency), 3600);
    }

    render(){
        return(
            <div className="table-responsive">
                <table className="table table-sm table-striped border">
                    <thead>
                        <tr className="border">
                            <th className="border">#</th>
                            <th className="left-text">Name</th>
                            <th className="right-text">Market Cap</th>
                            <th className="right-text">Price</th>
                            <th className="right-text">Circulating Supply</th>
                            <th className="right-text">Change (24h)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.coinList.map((coin,i) =>{
                                return <Coin key={i} rank={coin.rank} name={coin.name} market_cap_usd={coin.market_cap_usd} price_usd={coin.price_usd}
                                            available_supply={coin.available_supply} percent_change_24h={coin.percent_change_24h} symbol={coin.symbol}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Board;
