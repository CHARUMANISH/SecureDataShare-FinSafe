import React, { useEffect } from 'react';
import { detectAnomalies } from '../utils/anomalyDetection';

const AnomalyAlerts = ({ alerts }) => {
  useEffect(() => {
    const interval = setInterval(async () => {
      const newAlerts = await detectAnomalies();
      if(newAlerts.length > 0) {
        // Update parent state
      }
    }, 30000); // Check every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="alerts-panel">
      <h3>Security Alerts</h3>
      {alerts.length > 0 ? (
        <ul>
          {alerts.map((alert, index) => (
            <li key={index} className={`alert-${alert.severity}`}>
              {alert.message} - {new Date(alert.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recent security alerts</p>
      )}
    </div>
  );
};