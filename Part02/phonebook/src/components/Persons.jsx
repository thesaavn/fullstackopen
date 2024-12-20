import Person from './Person'

const Persons = ({persons, deleteEntry}) => {
  return ( 
    <div>
      <ul>
        {persons.map(person => 
          <Person key={person.name} person={person} deleteEntry={deleteEntry}/>
        )}
      </ul>
    </div>
  )
}

export default Persons