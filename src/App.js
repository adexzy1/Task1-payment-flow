import { useState } from 'react';
import './App.css';
import PurchaseCompleted from './components/purchaseCompleted/PurchaseCompleted';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Form from './pages/Form/Form';

function App() {
  const [switchPage, setSwitchPage] = useState(1);

  return (
    <div className="App">
      <ScrollToTop switchPage={switchPage} />
      {switchPage !== 4 ? (
        <Form switchPage={switchPage} setSwitchPage={setSwitchPage} />
      ) : (
        <PurchaseCompleted setSwitchPage={setSwitchPage} />
      )}
    </div>
  );
}

export default App;
