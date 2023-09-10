import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CnbuddyDelegator() {
  const [delegator, setDelegator] = useState([]);
  const [sortBy, setSortBy] = useState(''); // State to track the sorting field
  const [sortOrder, setSortOrder] = useState(''); // State to track the sorting order (asc or desc)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('https://cnbuddy-api.steemcn.xyz/cnbuddy-delegator')
      .then((response) => {
        setDelegator(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Sorting function to be called when the table headers are clicked
  const handleSort = (field) => {
    // If the same field is clicked again, toggle the sort order
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // If a different field is clicked, set it as the new sorting field and reset the sort order
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  // Sort the data based on the current sorting field and order
  const sortedData = () => {
    if (sortBy && sortOrder) {
      return [...delegator].sort((a, b) => {
        const aValue = sortBy === 'vests' ? parseFloat(a[sortBy]) : a[sortBy];
        const bValue = sortBy === 'vests' ? parseFloat(b[sortBy]) : b[sortBy];
        if (sortOrder === 'asc') {
          return aValue - bValue;
        } else {
          return bValue - aValue;
        }
      });
    }
    return delegator;
  };

  return (

    <div>
      <h1>cnbuddy代理名单</h1>
      <h2>The List of Delegator</h2>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th onClick={() => handleSort('delegator')}>股东/Delegator</th>
            <th onClick={() => handleSort('vests')}>代理SP/SP-Delegated</th>
            <th onClick={() => handleSort('time')}>代理时间/Time</th>
          </tr>
        </thead>
        <tbody>
          {sortedData().map((item, index) => (
            <tr key={index}>
              <td>{item.delegator}</td>
              <td>{(item.vests / 1759).toFixed(2)}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CnbuddyDelegator;
