import React, { Component } from 'react';
import { Grid} from 'react-blessed-contrib';

import {Wallet} from '../widget/wallet'


class Dashboard extends Component {
    constructor(props) {
      super(props)
    }
  
    render() {
        return (
            <Grid rows={12} cols={12}>
                <Wallet></Wallet>
            </Grid>
        )
      }
  }

export {
    Dashboard
}