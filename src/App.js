import React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ErrorPage from './components/404error';

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="empty-div"></div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/react-final" component={Home} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/cart" component={Cart} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
