const Person = ({person, deleteEntry}) => {
  return (
    <li>{person.name} {person.number} <button onClick={() => deleteEntry(person.id)}>Delete</button></li>
  )
}

export default Person