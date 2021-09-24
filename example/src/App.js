import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from './state/index';
import { useState } from 'react';
import axios from 'axios'

function App() {
  
  const [state, setState] = useState(false)
  const data = useSelector((state) => state.account.state );
  const dispatch = useDispatch();
  console.log(typeof data)
 
  const { fetchAPI } = bindActionCreators(actionCreator, dispatch)

  const clickFetch = async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/users')
    let data     = await response.data
    await fetchAPI(data)
    await setState(true)
  };
  return (
    <div className="App">
      <button onClick={clickFetch}>Fetch</button>
      <h1>123</h1>
      <ul>
         {state &&  data.map( (item, index) => <li key={index} > name: { item.name }</li>)}
      </ul>
    </div>
  );
}

export default App;
