import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/index.js';
import { Home, Cart } from './pages/index.js';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3001/db.json')
      .then((resp) => resp.json())
      .then((json) => setPizzas(json.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home items={pizzas} />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
