import React from 'react';

class Coin extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rank: this.props.rank,
            name: this.props.name,
            market_cap_usd : this.props.market_cap_usd,
            price_usd : this.props.price_usd,
            available_supply : this.props.available_supply,
            symbol : this.props.symbol,
            percent_change_24h : this.props.percent_change_24h
        }
    }

    render() {
        return (
            <tr>
                <td className="border">{this.state.rank}</td>
                <td className="blue ">{this.state.name}</td>
                <td className="right-text">$ {this.state.market_cap_usd} </td>
                <td className="blue right-text">$ {this.state.price_usd} </td>
                <td className="blue right-text">{parseInt(this.state.available_supply)} {this.state.symbol}</td>
                <td className={"right-text " + (this.state.percent_change_24h >= 0 ? 'green-text' : 'red-text')}>{this.state.percent_change_24h}%</td>
            </tr>
        )
    }
}

export default Coin;