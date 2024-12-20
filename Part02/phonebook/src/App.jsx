import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filterText, setFilterText] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const foundPerson = persons.find(({name}) => name === newName)
    
    if (foundPerson){
      const confirmUpdate = newNumber && confirm(`${foundPerson.name} is already added to phonebook, replace the old number with a new one?`)

      if (!confirmUpdate) {
        alert(`${newName} is already added to the phonebook`)
        setNewName('')
        setNewNumber('')
        return
      }

      const updatedObject = {...foundPerson, number: newNumber}
      personService.update(foundPerson.id, updatedObject)
        .then(returnedObject => {
          setPersons(persons.map(person => person.id === returnedObject.id ? returnedObject : person))
        })

      setNewName('')
      setNewNumber('')
      return
    }

    const newPerson = {name: newName, number: newNumber}
    
    personService.create(newPerson)
      .then(returnedObject => {
        setPersons([...persons, returnedObject])
        setNewName('')
        setNewNumber('')
      })
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleSearchText = (event) => {
    setFilterText(event.target.value.toLowerCase())
    setShowAll(false)
  }

  const deleteEntryOf = (id) => {
    if (confirm(`Delete ${persons.find(person => person.id === id).name}?`)){
      personService.remove(id)
      .then(deletedObject => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
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
      <Persons persons={personsToShow} deleteEntry={deleteEntryOf}/>
    </div>
  )
}

export default App