import { BrowserRouter as BwRouter, Routes, Route } from 'react-router-dom';
import { ListProvider } from './ListContext';
import { Landing } from './pages/Landing';
import { Lists } from './pages/Lists';
import { Sublists } from './pages/Sublists';

function App() {
  return (
    <>
      <ListProvider>
        <BwRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/lists/sublists/:id" element={<Sublists />} />
          </Routes>
        </BwRouter>
      </ListProvider>
    </>
  );
}

export default App;
