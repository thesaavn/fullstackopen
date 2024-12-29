const Form = ({hanldeSubmit, handleValueChange, value}) => {
  return (
    <>
      <form onSubmit={hanldeSubmit}>
        Find countries: <input type="text" value={value} onChange={handleValueChange} />
      </form>
    </>
  )
}

export default Form