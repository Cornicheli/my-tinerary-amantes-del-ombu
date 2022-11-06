import {SignUp}  from './component/SignUp.jsx';
import React from 'react';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path='/' element={<SignUp/>}/>
      </Routes>
  );
}

export default App;