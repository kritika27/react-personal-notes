import React from 'react'

const Expense = ({list, edit, setEdit, editId, setEditId, setItem, setAmount}) => {


//   const list=[
//     {
//       id:1,
//       item:"Bus",
//       amount:400
//     },
//     {
//       id:2,
//     item:"auto",
//   amount:200
// }
//   ]
  const editItem=(id)=>{
    // console.log(id);
    const editItem=list.find(el=>el.id===id);
setEdit(true);
setEditId(id);
     console.log(editItem);
     setItem(editItem.item);
     setAmount(editItem.amount);
  }
  return (
    <div>
        {
            list.map(el=>{
                return (
                    <div>
                        <h2>{el.item}</h2>
                        <p>${el.amount}</p>
                        <button onClick={()=>editItem(el.id)}>Edit</button>
                        <button>Delete</button>
                        </div>
                )
            })
        }
    </div>
  )
}

export default Expense;