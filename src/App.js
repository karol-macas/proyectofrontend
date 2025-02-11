import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/loans')
      .then(response => setLoans(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Loan Management</h1>
      <ul>
        {loans.map(loan => (
          <li key={loan.id}>{loan.amount} - {loan.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;