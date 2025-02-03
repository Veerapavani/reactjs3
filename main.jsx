import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Demo from './Components/demo.jsx';
import Cbc from './Components/Cbc.jsx';
import Parent from './Components/Parent.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Demo /> 
      <Cbc /> 
      <Parent/>
    </div>
  </StrictMode>
);

