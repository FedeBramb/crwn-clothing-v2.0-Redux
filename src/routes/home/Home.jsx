import React from 'react';
import { Outlet } from 'react-router-dom';

import Directory from '../../components/Directory/Directory.component.jsx';

function Home() {
 
  return (
    <>
      <Directory/>
      <Outlet />
    </>
  )
}

export default Home;