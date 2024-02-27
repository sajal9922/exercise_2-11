const PhoneBookForm = ({
  addName,
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addName}>
      <div
        style={{
          marginBottom: '5px',
        }}
      >
        name: <input required value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number:{' '}
        <input required value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button
          style={{
            padding: '5px 10px',
            cursor: 'pointer',
          }}
          type="submit"
        >
          add
        </button>
      </div>
    </form>
  );
};

export default PhoneBookForm;
