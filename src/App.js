import './App.css';
import PersonCard from './PersonCard';
const App = () => {
  const personas = [
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 45,
      hairColor: "negro",
    },
    {
      firstName: "John",
      lastName: "Smith",
      age: 88,
      hairColor: "marrón",
    },
    {
      firstName: "Millard",
      lastName: "Fillmore",
      age: 50,
      hairColor: "gris",
    },
    {
      firstName: "Maria",
      lastName: "Smith",
      age: 62,
      hairColor: "rubio",
    },
  ];

  return (
    <div>
      {personas.map((persona) => (
        <PersonCard
          key={persona.firstName}
          firstName={persona.firstName}
          lastName={persona.lastName}
          age={persona.age}
          hairColor={persona.hairColor}
        />
      ))}
    </div>
  );
};

export default App;

