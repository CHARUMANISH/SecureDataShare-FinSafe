import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccessLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        // Mock API call - replace with your actual endpoint
        const response = await axios.get('http://localhost:3001/logs');
        setLogs(response.data);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };
    fetchLogs();
  }, []);

  return (
    <div className="card">
      <h2>Access Logs</h2>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>User</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{new Date(log.timestamp).toLocaleString()}</td>
              <td>{log.user}</td>
              <td>{log.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccessLogs;