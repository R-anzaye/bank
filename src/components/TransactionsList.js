import React from "react";

function TransactionsList({ transactions }) {
    // Define the delete function
    function handleDelete(transId) {
      fetch(`http://localhost:8001/transactions/${transId}`, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => { 
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* Map over filtered transactions fromcsearch and render each transaction */}
        {transactions.map((trans) => (
          <tr key={trans.id}>
            <td>{trans.date}</td>
            <td>{trans.description}</td>
            <td>{trans.category}</td>
            <td>{trans.amount}</td>
            <td>
            {/* Pass the transaction id to the delete function */}
            <button onClick={() => handleDelete(trans.id)}>Delete</button>
          </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionsList
