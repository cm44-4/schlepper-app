import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Search from '../search/search';
import Navbar from '../navbar/navbar';
import TradesTab from '../trades/trades';
import MessagesTab from '../messages/messages';
import NewMessage from '../messages/new-message/new-message';
import Reply from '../messages/reply/reply';
import './home.css';
import Profile from '../profile/profile';
import UserTrades from '../trades/user-trades/user-trades';
import { useAppSelector } from '../../redux/hooks';
import * as React from 'react';
import MapBox from '../Map/Mapdisplay';

//the main component that's displayed after logging in.
const Home: React.FC = () => {
  //redux
  const username = useAppSelector<string>(state => state.user);
  const viewedUser = useAppSelector<string>(state => state.viewedUser);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/search' element={<Search />} />
        <Route path='/messages' element={<MessagesTab />} />
        <Route path='/trades' element={<TradesTab />} />
        <Route path='/userTrades' element={<UserTrades />} />
        <Route path='/profile' element={<Profile username={username} />} />
        <Route path='/user' element={<Profile username={viewedUser} />} />
        <Route path='/newMessage' element={<NewMessage />} />
        <Route path='reply' element={<Reply />} />
        <Route path='/map' element={<MapBox />} />
      </Routes>
    </Router>
  );
};

export default Home;
