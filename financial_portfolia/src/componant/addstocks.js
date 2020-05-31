import React from 'react';
import a from './PopUp'
//import * as admin from 'firebase-admin';
/* function getfirebase(){
const config={
    apikey:"AIzaSyDDbYTsJUQ03EjC0ds1oo5RsuQVijvco14",
    authDomain:"financeportfolia.firebaseio.com/",
    databaseURL:"https://financeportfolia.firebaseio.com/",
    storagebucket:"gs://financeportfolia.appspot.com/",
};
firebase.initializeApp(config);

const dbobject = firebase.database().ref().child(object);
}*/

function AddStock(){
    return(
        <div className="AddStocksTitle">
            <h2>Add Stocks to my stocks</h2>
        <ul>
            <li>
            const ModalButton = props => (  
                <button className="StockButton" onClick={props.handleClick}> MSFT  {props.children})</button>  Microsoft Corporation
            </li><br></br>
            <li>
            <button className="StockButton"> GS</button>  Goldman Sachs
            </li><br></br>
            <li>
            <button className="StockButton"> BA</button>  The Boeing Company
            </li><br></br>
            <li>
            <button className="StockButton"> MCD</button>  McDonald's Corporation
            </li><br></br>
            </ul>
        </div>
    );
}

export default AddStock;