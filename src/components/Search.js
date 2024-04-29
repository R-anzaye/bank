// importation use state, use effect and react all at once
import React, { useState, useEffect } from "react"

// two components that is AddTransactionForm and TransactionLIst have been rendered from their respective file still in components
import AddTransactionForm from "./AddTransactionForm"
import TransactionsList from "./TransactionsList"

function Search() {
  
  const [transactions, setTransactions] = useState([])// Initialize state for transactions
  const [searchTerm, setSearchTerm] = useState("") // Initialize state for search term
 
  /*This is how we fetch data from db.json with an inbuild react 
  component that takes data form db.json and places it inside the setTransactions() function as data*/
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data)
      })
  }, [])

  /* Filter transactions based on search term. Whatever
   is added is how to make sure the filtered data changes all te input to lowercase for the user to have easy search condition and the search data also transformed to lowercase*/
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder="Search your Recent Transactions"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <i className="circular search link icon"></i>
      </div>
       {/*The transaction form is placed here do display the appropriate column headings*/}
      <AddTransactionForm />
      {/* Pass filteredTransactions as a prop to TransactionsList */}
      <TransactionsList transactions={filteredTransactions} />
    </div>
  )
}
// exporting of the search component

export default Search
