import Header from './Header'
import Content from './Content'

const Course = ({ courses }) => {
  return (
    <>
      {courses.map(course => 
        <div key={course.id}>
          <Header text={course.name} headLevel={2}/>
          <Content parts={course.parts}/>
        </div>
      )}
    </>
  )
}

export default Course