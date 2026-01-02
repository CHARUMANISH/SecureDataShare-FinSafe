import React, { useState } from 'react';
import { TokenizationDashboard } from './components/TokenizationDashboard';
import { ConsentManager } from './components/ConsentManager';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="app-container">
      <header>
        <h1>SecureDataShare Platform</h1>
        <nav>
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={activeTab === 'dashboard' ? 'active' : ''}
          >
            Data Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('consent')}
            className={activeTab === 'consent' ? 'active' : ''}
          >
            Consent Manager
          </button>
        </nav>
      </header>

      <main>
        {activeTab === 'dashboard' && <TokenizationDashboard />}
        {activeTab === 'consent' && <ConsentManager />}
      </main>
    </div>
  );
}

export default App;