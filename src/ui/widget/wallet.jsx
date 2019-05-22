import React, {Component} from 'react';
import {Table} from 'react-blessed-contrib';

function getData() {
    const data = [
        ['Bitcoin', 'BTC', '1.00102319'],
        ['Ethereum', 'ETH', '140.034112'],
        ['BinanceCoin', 'BNB', '36.0000012']
    ]
    return {headers: [' ', ' ', ' '], data: data};
}

class Wallet extends Component {
    constructor(props) {
      super(props)

      this.data = getData()
    }
  
    render() {
        return (
            <Table ref='mywallettable'
            row={4} col={9}
            rowSpan={4} colSpan={3} 
            {...{ 
                keys: true,
                fg: 'green',
                label: 'My Wallet',
                columnSpacing: 1,
                columnWidth: [24, 10, 10]
            }}
            data={this.data}/>
        )
      }
  }

export {
    Wallet
}