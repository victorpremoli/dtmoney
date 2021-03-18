import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Mercado',
          amount: 255,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2021-02-12 09:15:35'),
        },
        {
          id: 2,
          title: 'Frella de Website',
          amount: 5000,
          type: 'deposit',
          category: 'Dev',
          createdAt: new Date('2021-02-15 13:05:03'),
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
