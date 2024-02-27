import React from 'react';

const DisplayPerson = ({ persons, deletePerson }) => {
  return (
    <div>
      {persons.map((person) => (
        <p
          style={{
            padding: '5px',
          }}
          key={person.id}
        >
          {person.name} {person.number}
          <button
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              cursor: 'pointer',
            }}
            onClick={() => deletePerson(person.id)}
          >
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default DisplayPerson;
