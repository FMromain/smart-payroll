// material-ui
import { Box, FormControl, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import getColRef from './../../databaseHook';
import {
  addDoc,
} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

let colRef = getColRef();


const AddProducts = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('Coffee');
  const [orderDate, setOrderDate] = useState('');
  let navigate = useNavigate();

  const addProduct = (e) => {

    e.preventDefault();
    addDoc(colRef, {
      name: name,
      cost: cost,
      quantity: quantity,
      category: category,
      orderDate: orderDate,
    })
      .then(() => {
        console.log("product added");
        console.log({ name, cost, quantity, category, orderDate });
      })
    navigate("/ourproducts")
  }



  return (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }} >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', backgroundColor: '#D6C7AE' }}>
        <h1>Add new product</h1>
      </div>
      <form style={{ backgroundColor: '#D6C7AE' }}>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* ==============================|| Add name of the product ||============================== */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <h3>Add name of the product </h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <FormControl sx={{ width: { xs: '100%', md: 250 } }}>
              <OutlinedInput
                type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Name" style={{ backgroundColor: 'white' }} required
              />
            </FormControl>
          </div>

          {/* ==============================|| Add quantity of the product ||============================== */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <h3>Add quantity of the product in kilograms</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <FormControl sx={{ width: { xs: '100%', md: 250 } }}>
              <OutlinedInput
                type="text" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}
                placeholder="Quantity" style={{ backgroundColor: 'white' }} required
              />
            </FormControl>
          </div>

          {/* ==============================|| Add cost of the product ||============================== */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <h3>Add cost of the product in Euro</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <FormControl sx={{ width: { xs: '100%', md: 250 } }}>
              <OutlinedInput
                type="text" name="cost" value={cost} onChange={(e) => setCost(e.target.value)}
                placeholder="Cost" style={{ backgroundColor: 'white' }} required
              />
            </FormControl>
          </div>
        </form>
        <form>
          {/* ==============================|| Select category of the product ||============================== */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3>Select category of the product</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FormControl sx={{ width: { xs: '100%', md: 250 } }}>
              <select name="category" id="categoryID" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Coffee">Coffee</option>
                <option value="Non coffee">Non coffee</option>
                <option value="Bakery">Bakery</option>
                <option value="Desert">Desert</option>
                <option value="Salad">Salad</option>
              </select>
            </FormControl>
          </div>

          {/* ==============================|| Select date of order for the product ||============================== */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3>Select date of order</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FormControl sx={{ width: { xs: '100%', md: 250 } }}>
              <input type="date" name='orderDate' id="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} required></input>
            </FormControl>
          </div>
        </form>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
          <button onClick={(e) => addProduct(e)}>Add product</button>
        </div>
      </form>

    </Box>


  );
}

export default AddProducts;

