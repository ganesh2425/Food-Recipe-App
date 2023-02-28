import React, { useState } from 'react';
import Products from './Products';

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "d1a98dd7"
  const YOUR_APP_KEY = "8ba7e13f35d99c6cfc5856b95784d940	"

  const submitHandler=(e)=>{
    e.preventDefault();
    // console.log(search);
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=24&calories=591-722&health=alcohol-free`)
    .then(res=>res.json()
    ).then(
      data => setData(data.hits)
    )

  }
  return (
    <>
    <center>
      <h4>Food Recipe App!!</h4> <br/>
      <form onSubmit={submitHandler}>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/> <br/>
        <input type="submit" value="Search" className='btn btn-primary'/>
      </form>
      {data.length>1 ? <Products data={data}/>: null}
    </center>
    </>
  )
}

export default App