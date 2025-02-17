import { useEffect, useState } from 'react';
import apiService from '../APIservice';
import UserMini from '../search-minis/user-mini/user-mini';
import './trades.css';

function TradesTab () {

  //state
  const [area, changeArea] = useState('');
  const [users, changeUsers] = useState([]);
  
  //sets location after picked
  function handleChange(e) {
      changeArea(e.target.value);
  }

  //gets users from database after location is picked
  useEffect(()=> {
      async function findTrades () {
        const res = await apiService.findTrades(area);
        changeUsers(res);
      }
      findTrades();
  },[area])

  return (
    <div className="trades-container">
      <h1>Browse Trades</h1>
      <label>Select State:</label>
      <select id="state" name="state" onChange={handleChange}>
        {/* this just straight up should be an array that's mapped to options
        it's used multiple times and didn't feel lke changing it.*/}
        <option value="al">Alabama</option>
        <option value="ak">Alaska</option>
        <option value="az">Arizona</option>
        <option value="ar">Arkansas</option>
        <option value="ca">California</option>
        <option value="co">Colorado</option>
        <option value="ct">Connecticut</option>
        <option value="da">Delaware</option>
        <option value="fl">Florida</option>
        <option value="ga">Georgia</option>
        <option value="hi">Hawaii</option>
        <option value="id">Idaho</option>
        <option value="il">Illinois</option>
        <option value="in">Indiana</option>
        <option value="ia">Iowa</option>
        <option value="ks">Kansas</option>
        <option value="ky">Kentucky</option>
        <option value="la">Louisiana</option>
        <option value="me">Maine</option>
        <option value="md">Maryland</option>
        <option value="ma">Massachusetts</option>
        <option value="mi">Michigan</option>
        <option value="mn">Minnesota</option>
        <option value="ms">Mississippi</option>
        <option value="mo">Missouri</option>
        <option value="mt">Montana</option>
        <option value="ne">Nebraska</option>
        <option value="nv">Nevada</option>
        <option value="nh">New Hampshire</option>
        <option value="nj">New Jersey</option>
        <option value="nm">New Mexico</option>
        <option value="ny">New York</option>
        <option value="nc">North Carolina</option>
        <option value="nd">North Dakota</option>
        <option value="oh">Ohio</option>
        <option value="ok">Oklahoma</option>
        <option value="or">Oregon</option>
        <option value="pa">Pennsylvania</option>
        <option value="pr">Puerto Rico</option>
        <option value="ri">Rhode Island</option>
        <option value="sc">South Carolina</option>
        <option value="sd">South Dakota</option>
        <option value="tn">Tennessee</option>
        <option value="tx">Texas</option>
        <option value="ut">Utah</option>
        <option value="vt">Vermont</option>
        <option value="va">Virginia</option>
        <option value="wa">Washington</option>
        <option value="dc">Washington D.C.</option>
        <option value="wv">West Virginia</option>
        <option value="wi">Wisconsin</option>
        <option value="wy">Wyoming</option>
      </select> 
      {area && 
        users.map(u => < UserMini key={u.username} u={u}/>)
      }
    </div>
  );
}

export default TradesTab;