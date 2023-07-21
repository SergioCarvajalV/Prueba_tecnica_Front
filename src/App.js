import { BrowserRouter, Route, Routes } from 'react-router-dom';

//import components
import CompShowUsers from './users/ShowUsers';
import CompCreateUser from './users/CreateUser';
import CompUpdateUser from './users/UpdateUser';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowUsers/>} />
          <Route path='/create' element={<CompCreateUser/>} />
          <Route path='/edit/:id' element={<CompUpdateUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
