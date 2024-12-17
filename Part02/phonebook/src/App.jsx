import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filterText, setFilterText] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(({name}) => name === newName)){
      setNewName('')
      setNewNumber('')
      return alert(`${newName} is already added to the phonebook`)
    }

    const personObject = {name: newName, number: newNumber}
    
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleSearchText = (event) => {
    setFilterText(event.target.value.toLowerCase())
    setShowAll(false)
  }

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterText))

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handleSearchText={handleSearchText}/>
      
      <h2>Add a new:</h2>
      <PersonForm handleFormSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      
      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  )
}

export default App