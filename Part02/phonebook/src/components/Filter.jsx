const Filter = ({handleSearchText}) => {
  return (
    <div>
      Filter shown with: <input onChange={handleSearchText} />
    </div>
  )
}

export default Filter