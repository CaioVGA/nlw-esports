interface ButtonProps {
  title: String;
}


function Button(props: ButtonProps) {
  return (
  <button>
    {props.title}
  </button>
  )
}


function App() {
  return (
    <div>
      <Button title='Button 1' /> <br />
      <Button title='Button 2' /> <br />
      <Button title='Button 3' /> <br />
    </div>
  )
}

export default App
