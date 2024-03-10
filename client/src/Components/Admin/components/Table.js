import React from 'react';

const TableComponent = ({ data }) => {
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%'
  };

  const thStyle = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
    backgroundColor: '#f2f2f2'
  };

  const tdStyle = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px'
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Product</th>
          <th style={thStyle}>Sales</th>
          <th style={thStyle}>Revenue</th>
          <th style={thStyle}>Percentage Change</th>
          <th style={thStyle}>Category</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td style={tdStyle}>{item.productName}</td>
            <td style={tdStyle}>{item.sales}</td>
            <td style={tdStyle}>{item.revenue}</td>
            <td style={tdStyle}>{item.percentageChange}</td>
            <td style={tdStyle}>{item.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
