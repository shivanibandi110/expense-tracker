// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const addTransaction = () => {
    if (!text || !amount) return;

    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount
    };

    setTransactions([...transactions, newTransaction]);
    setText('');
    setAmount('');
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2);

  return (
    <div className="container">
      <h2>Expense Tracker</h2>

      <div className="balance">
        <h4>Your Balance</h4>
        <h1>${total}</h1>
      </div>

      <h3>History</h3>
      <ul className="transaction-list">
        {transactions.map(transaction => (
          <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>${transaction.amount}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
          </li>
        ))}
      </ul>

      <h3>Add New Transaction</h3>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
      </div>
      <button onClick={addTransaction} className="btn">Add Transaction</button>
    </div>
  );
}

export default App;
