import toDo from "./components/ToDo";
 
function App() {
  const lista = [
    "Learn React",
    "Climb Mt. Everest",
    "Run a marathon",
    "Feed the dogs"
  ]

  return (
    <div>
      <h1>Hello Dojo!</h1>
      <h2>Things I Need to do</h2>
      <ul>
        {
          lista.map(el => {
            return (
              toDo({element:el})
            );
          })
        }
      </ul>
    </div>
  );
}

export default App;
