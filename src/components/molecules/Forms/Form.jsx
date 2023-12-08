/* eslint-disable no-undef */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = () => {
  const [entries, setEntries] = useState([]);
  const addEntryToPhoneBook = (entry) => {
    setEntries([...entries, entry].sort((a, b) => (a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1)));
  };

  // Create Entry Form
  function EntryForm(addEntryToPhoneBook) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleSubmit = (e) => {
      // preventDefault Entry
      e.preventDefault;
      addEntryToPhoneBook({ firstName, lastName, phoneNumber });
    };
    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}></input>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}></input>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}></input>
        <button style={{ width: '160px', height: '25px' }} onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    );
  }

  // Create Displaying Entries
  function DisplayEntries({ entries }) {
    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={`${entry.firstName} ${entry.phoneNumber}`}>
              <td>{entry.firstName}</td>
              <td>{entry.lastName}</td>
              <td>{entry.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}>
      <EntryForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <DisplayEntries entries={entries} />
    </div>
  );
};

Form.propTypes = {
  entries: PropTypes.string,
};

export default Form;
