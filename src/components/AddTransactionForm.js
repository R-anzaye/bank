import React, { useState } from "react"

function AddTransactionForm() {
  // Initialization of the state component remembering it has to be rendered by importing it first
 // The statesare specifically for the 4 data inputs that we have
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState(0)

  // the handle submit function that is rendered to our form
  function handleSubmit(e) {
    // Prevents default refreshing of the form and loosing the data after data has been placed
    e.preventDefault()
    //What this does is that is removes the data placed in the input holders making it empty as it was initially
    setAmount("")
    setCategory("")
    setDescription("")
    setDate("")

// just like javascript jsx enables us to use fetch function to fetch data from db.json and display it as post
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // This the data we are placing in the body that is date, description,category and amount
        date,
        description,
        category,
        amount,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  }
// Whatever is added is the onsubmit callback function(handleSubmit ) and also the value of every input not forgetting onChange taht basically captures the users input.
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        {/* This is the submit button that is rendered with the submit as type */}
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default AddTransactionForm


