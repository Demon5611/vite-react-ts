import React from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter >
<div className="main-container" >
      <Container>
        <App  />
      </Container>
      </div>
  </BrowserRouter>,
);
