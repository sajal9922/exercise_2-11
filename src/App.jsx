import { useState, useEffect } from 'react';
import PhoneBookForm from './components/PhoneBookForm';
import DisplayPerson from './components/DisplayPerson';
import axios from 'axios';
import services from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [notification, setNotification] = useState(null);

  //Exercise: 2.11
  //Getting data from local server
  useEffect(() => {
    services.getAll().then((initialPerson) => setPersons(initialPerson));
    // axios.get('http://localhost:3000/persons').then((response) => {
    //   setPersons(response.data);
    // });
  }, []);

  const [newNumber, setNewNumber] = useState('');

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    //Exercise: 2.7
    // Check if the new name already exists in the phonebook
    const nameExists = persons.some((person) => person.name === newName);
    if (nameExists) {
      alert(`${newName} is already in the phonebook!`);
    } else {
      // If the name doesn't exist, proceed with adding it
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      services.createPerson(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNotification(`Added ${returnedPerson.name}`);
        setTimeout(() => {
          setNotification(null);
        }, 2000);
      });

      // axios
      //   .post('http://localhost:3000/persons/', newPerson)
      //   .then((response) => setPersons(persons.concat(response.data)));
    }
    //console.log(persons);
    setNewName('');
    setNewNumber('');
  };
  const deletePerson = (id) => {
    const findPerson = persons.find((person) => person.id === id);
    const isConfirmed = window.confirm(`Delete ${findPerson.name}?`);
    if (isConfirmed) {
      services
        .removePerson(id)
        .then(() => setPersons(persons.filter((person) => person.id != id)));
    }

    // axios.delete(`http://localhost:3000/persons/${id}`, id).then(() => {
    //   setPersons(persons.filter((person) => person.id !== id));
    // });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <PhoneBookForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>

      <DisplayPerson persons={persons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
