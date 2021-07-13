import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Feed from '../../components/Feed.jsx';
import Widgets from '../../components/Widgets';
import Login from '../../components/Login.jsx';
import { useStateValue } from './StateProvider.js';
import React from 'react';
//@ts-nocheck

function Home() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
