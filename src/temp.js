import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import "./index.css";
import { Form } from "./components/Form";
import Expense from "./components/Expense";
// import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Paper,
//   colors,
// } from "@mui/material";

export const App=()=> {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);
  const [list, setList] = useState([]);
  const [edit,setEdit]=useState(false);
  const [editId,setEditId] =useState(null);
  const [income,setIncome]=useState(5000);
  // const [sortOrder, setSortOrder] = useState("asc");
  // const timeElapsed = Date.now();
  // const today = new Date(timeElapsed);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      // id: uuidv4(),
      id:Math.random(),
      item,
      amount
      // date: today.toDateString(),
    };
//Adding items
    if (item && amount && !edit) {
      setList([...list, newItem]);
      setItem("");
      setAmount(0);
      setEdit(false);
      setEditId(null);
    }
    //Editing items
    else if(item && amount && edit && editId)
    {
      // console.log("hello");
      setList(
        list.map((it) => {
          if (it.id === editId) {
            return {
              ...it,
              item: item,
              amount:amount,
            };
          }
          return it;
        })
      );
      setItem("");
      setAmount(0);
      setEdit(false);
      setEditId(null);
    }
  };

  const deleteItem = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  // const sortList = () => {
  //   const sortedList = list.sort((a, b) => {
  //     if (sortOrder === "asc") {
  //       return a.item.localeCompare(b.item);
  //     } else {
  //       return b.item.localeCompare(a.item);
  //     }
  //   });
  //   setList(sortedList);
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  // };
  // const sortIcon =
  //   sortOrder === "asc" ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />;
  // const totalAmount = list.reduce(
  //   (sum, item) => sum + parseFloat(item.amount),
  //   0
  // );
  console.log(list);


  // function sum(a,b)
  // {
  //   return a+b;
  // }

  // sum(5,6);
  return (
    <>
        <h1>Expense Tracker</h1>
        <label>Income</label>
        <input type="number" value={income}
         onChange={(e)=>setIncome(e.target.value)} />
         <label>Remaining balance</label>
         <h2>$500</h2>
        <Form item={item} setItem={setItem} amount={amount} setAmount={setAmount} 
        handleSubmit={handleSubmit} edit={edit}/>
        <Expense list={list} edit={edit} setEdit={setEdit}
        editId={editId} setEditId={setEditId}
        setItem={setItem} setAmount={setAmount}
        />
    </>
  );
}