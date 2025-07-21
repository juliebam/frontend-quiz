

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:subjectName" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
