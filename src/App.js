import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/:id" element={<Dashboard/>} />
        <Route path="/" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
