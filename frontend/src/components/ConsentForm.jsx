import React, { useState } from 'react';
import { tokenizeData } from '../utils/tokenizer';

const ConsentForm = () => {
  const [formData, setFormData] = useState({
    dataType: 'transactions',
    thirdParty: '',
    duration: 30,
    masked: true
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tokenized = await tokenizeData(formData);
    // Send to smart contract
  };

  return (
    <div className="card">
      <h2>Data Sharing Consent</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Data Type:</label>
          <select value={formData.dataType} onChange={(e) => setFormData({...formData, dataType: e.target.value})}>
            <option value="transactions">Transactions</option>
            <option value="account">Account Details</option>
            <option value="kyc">KYC Documents</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Third Party:</label>
          <input 
            type="text" 
            value={formData.thirdParty}
            onChange={(e) => setFormData({...formData, thirdParty: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Mask Sensitive Data:</label>
          <input
            type="checkbox"
            checked={formData.masked}
            onChange={(e) => setFormData({...formData, masked: e.target.checked})}
          />
        </div>

        <button type="submit">Grant Conditional Access</button>
      </form>
    </div>
  );
};