import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddItems from './pages/AddItems';
import Visualize from './pages/Visualize';
import Budget from './pages/Budget';
import AboutUs from './pages/AboutUs/AboutUs';

import { FinanceProvider } from './utils/stateManagment/GlobalState';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          
            
          <FinanceProvider>
            <Routes>
                <Route 
                  path="/" 
                  element={<Home />} 
                />
                <Route 
                  path="/login" 
                  element={<Login />} 
                />
                <Route 
                  path="/signup" 
                  element={<Signup />} 
                />
                <Route 
                  path="/add-items" 
                  element={<AddItems />} 
                />
                <Route 
                  path="/visualize" 
                  element={<Visualize />} 
                />
                <Route 
                  path="/budget" 
                  element={<Budget />} 
                />
                <Route 
                  path="/aboutUs" 
                  element={<AboutUs />} 
                />

            </Routes>
          </FinanceProvider>
          
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
