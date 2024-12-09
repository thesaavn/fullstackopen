import Part from "./Part"

const Content = ({parts}) => {
  const total = parts.reduce((total, part) => total + part.exercises, 0)
  
  return (
    <>
      {parts.map(part => 
        <Part key={part.id} part={part}/>        
      )}
      <p><b>Total of {total} exercises</b></p>
    </>
  )
}

export default Content