const Header = ({ text, headLevel=1 }) => {
  if (headLevel==2) {
    return <h2>{text}</h2>
  }

  return <h1>{text}</h1>
}

export default Header