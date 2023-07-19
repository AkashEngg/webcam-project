import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard.js';
import Form from './Components/Form';
import Event from './Components/Event';
import Camera from './Components/Camera';
import { createContext, useEffect, useState } from 'react';
import Protected from './Protected';
import Error from './Components/Error';

const BioData = createContext();


const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const name = localStorage.getItem('name');
    if (user) {
      setUser(name);
    }
  }, []);

  return (
    <>
      <BioData.Provider value={user}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='dashboard/form' element={<Protected Cmp={Form} />}></Route>
          <Route path='dashboard/form/event' element={<Protected Cmp={Event} />}></Route>
          <Route path='dashboard/camera' element={<Camera />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BioData.Provider>
    </>
  );
}
export default App;
export { BioData };