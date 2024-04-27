import React, { useEffect, useState } from 'react';

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const historyString = localStorage.getItem('history');
    if (historyString) {
      const historyArray = historyString.split(',');
      setHistory(historyArray);
    }
  }, []);

  return (
    <div style={{
        paddingTop: '50px',
        paddingLeft: '750px',
      alignItems: 'center'
    }}>
        <h1 style={{ fontFamily: 'Times New Roman',marginLeft:'45px'}}>History</h1>
      <table style={{
        borderCollapse: 'separate',
        borderSpacing: '10px',
        textAlign: 'center',
        borderRadius: '10px',
        fontFamily: 'Times New Roman'
      }}>
        <tbody>
          {history.map((item, index) => (
            index % 3 === 0 ? (
              <tr key={index}>
                {[0, 1, 2].map(i => {
                  const dataIndex = index + i;
                  return history[dataIndex] ? (
                    <td key={dataIndex} style={{
                      padding: '8px',
                      borderRadius: '10px',
                      backgroundColor: '#888903',
                      border: '1px solid #888903',
                    }}>
                      {history[dataIndex]}
                    </td>
                  ) : null;
                })}
              </tr>
            ) : null
          ))}
        </tbody>
      </table>
    </div>
  );
}
