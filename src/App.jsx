import React, { Component } from 'react';
import './public/styles/main.css';
import './public/styles/util.css';

class App extends Component {
  render() {
    return (
      <div className="limiter">
        <div className="container-table100">
          <div className="wrap-table100">
            <div className="table100">
              <table>
                <thead>
                  <tr className="table100-head">
                    <th className="column1">Date</th>
                    <th className="column2">Order ID</th>
                    <th className="column3">Name</th>
                    <th className="column4">Price</th>
                    <th className="column5">Quantity</th>
                    <th className="column6">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="column1">2017-09-29 01:22</td>
                    <td className="column2">200398</td>
                    <td className="column3">iPhone X 64Gb Grey</td>
                    <td className="column4">$999.00</td>
                    <td className="column5">1</td>
                    <td className="column6">$999.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
