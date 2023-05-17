import React from 'react'

export const Form = ({item, setItem, amount, setAmount,handleSubmit, edit} ) => {
  return (
<form onSubmit={handleSubmit}>
          <label>Item</label>
          <input
            // id="item"
            type="text"
            value={item}
            // placeholder="Add a new item..."
            onChange={(e) => setItem(e.target.value)}
          />

          <label>Amount</label>
          <input
            // id="amount"
            // type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {!edit && <button>Add Item</button>}
          {edit && <button>Edit Item</button>}
        </form> 

  )
}
