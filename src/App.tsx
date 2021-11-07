import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Counter } from "./components/state/Counter";
import { Loggedin } from "./components/state/Loggedin";
//import { User } from "./components/state/User";
import { Status } from "./components/Status";
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box' 
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { MutableRef } from "./components/ref/MutableRef";

function App() {

  const personName = {
    first: "Petar",
    last: "Petrovic",
  };

  const personNamesList = [
    {
      first: "Mika",
      last: "Mikic",
    },
    {
      first: "Zika",
      last: "Zikic",
    },
    {
      first: "Pera",
      last: "Peric",
    },
  ];

  return (
    <div className="App">

      {/* 
      <Greet name={"Milan"} messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={personNamesList} />
      
      <Status status={"success"} />
      <Heading>Hello World</Heading>

      <Oscar>
        <Heading>Oscar goes to Leonardo Milan</Heading>
      </Oscar>

      <Button
        handleClick={(event, id) => {
          console.log("Button clicked!", event, id);
        }}
      />

      <Input handleChange={(event) => console.log(event.target.value)} />

      <Container style={{ border: "1px solid black", padding: "1rem" }} />
      
      <Loggedin />
      <User />
      
      <Counter />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      
      <UserContextProvider>
        <User />
      </UserContextProvider>

      */}

      <MutableRef />

    </div>
  );
}

export default App;
