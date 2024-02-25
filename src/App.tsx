import React from 'react';
import Card from './components/Card';

function App() {
  document.title = 'Скидочные карты';

  return (
    <div>
      <div>Скидочные карты</div>
      <Card title='Скидка #1' />
    </div>
  );
}

export default App;
