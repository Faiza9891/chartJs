import React,{useState,useEffect} from 'react'
// import axios from 'axios'
import '../componenets/Charts/Charts.css'

const Dataux = () => {
  const [year, setYear] = useState('');
  const [usergain, setUsergain] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('year', year);
    formData.append('usergain', usergain);

    try {
      const response = await fetch('/add', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      handleAddItem(data);
    } catch (error) {
      console.error(error);
    }
  };


const [items, setItems] = useState([]);

const handleAddItem = (newItem) => {
  setItems([...items, newItem]); // add the new item to the existing items array
};

useEffect(() => {
  const fetchItems = async () => {
    try {
      const response = await fetch('/api/items');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchItems();
}, []);

  return (
    <div className='side_div'>
    <form onSubmit={handleSubmit}>
    <div className="inputbox">
    <span>Years</span>
    <i></i>
    <input required="required" type="text" value={year} onChange={(event) => setYear(event.target.value)}/>
</div>
    <div className="inputbox">
    <span>Usergain</span>
    <i></i>
    <input required="required" type="text" value={usergain} onChange={(event) => setUsergain(event.target.value)}/>
</div>
<button type="submit">Add Item</button>
</form>
<div className='content'>
<ul>
<li>Years</li>
<li>Usergain</li>
</ul>
<div className='hr'></div>
{items.map(item => (
  <div>
  <ul key={item.id}>
  <li>{item.year}</li>
  <li>{item.usergain}</li>
  </ul>
  <div className='hr'></div>
  </div>
  ))}

</div>
    </div>
  )
}

export default Dataux