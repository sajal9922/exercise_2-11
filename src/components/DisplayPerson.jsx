import React from 'react';

const DisplayPerson = ({ persons, deletePerson }) => {
  return (
    <div>
      {persons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
          <button onClick={() => deletePerson(person.id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default DisplayPerson;
