import "./App.css";

function App() {
  function handleClick() {
    alert("Button Clicked!!!");
  }

  function handleMouseOver() {
    alert("Mouse over paragraph");
  }

  function handleChange(event) {
    console.log("Input changed");
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // prevent reload behaviour of form
    alert("Submit Form?");
  }

  return (
    <div>
      <h1>Event Handling</h1>
      <button onClick={handleClick}>Click Me</button>
      <p onMouseOver={handleMouseOver} style={{ border: "1px solid black" }}>
        First Paragrapgh
      </p>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="type here" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
