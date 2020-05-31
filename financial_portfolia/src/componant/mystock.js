import React from 'react';
import './mystock.css';
//import * as admin from 'firebase-admin';
//var admin = require('firebase-admin');


 function MyStock(){
    return(
        <div className="MyStocks">
            <div className="header">
                <h2> Finance Portfolio Tracker</h2>
            </div>
            <h2>MyStock</h2>
            <table>
                <tr className="MyStocksTable"> 
                    <th>Stock symbol</th>
                    <th>Stock name</th>
                    <th>No.of shares</th>
                    <th>Buy price</th>
                    <th>Current price</th>
                    <th>Profit/Loss</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            
            </table>
        </div>
    );
}

export default MyStock;