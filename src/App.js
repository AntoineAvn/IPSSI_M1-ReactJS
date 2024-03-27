// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage";
import SearchFilter from "./Components/SearchFilter/SearchFilter";
import DragDropList from "./Components/DragDropList/DragDropList";
import ColorSwitcher from "./Components/ColorSwitcher/ColorSwitcher";
import TodoList from "./Components/TodoList/TodoList";
import CharacterCounter from "./Components/CharacterCounter/CharacterCounter";
import ToggleVisibility from "./Components/ToggleVisibility/ToggleVisibility";
import InputField from "./Components/InputField/InputField";
import UserPosts from "./Components/UserPosts/UserPosts";
import ValidatedInput from "./Components/ValidatedInput/ValidatedInput";
import CountdownTimer from "./Components/CountdownTimer/CountdownTimer";
import WindowSize from "./Components/WindowSize/WindowSize";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dragdroplist" element={<DragDropList />} />
        <Route path="/searchfilter" element={<SearchFilter />} />
        <Route path="/colorswitcher" element={<ColorSwitcher />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/charactercounter" element={<CharacterCounter />} />
        <Route path="/togglevisibility" element={<ToggleVisibility />} />
        <Route path="/inputfield" element={<InputField />} />
        <Route path="/userposts" element={<UserPosts />} />
        <Route path="/validatedinput" element={<ValidatedInput />} />
        <Route path="/countdowntimer" element={<CountdownTimer />} />
        <Route path="/windowsize" element={<WindowSize />} />

      </Routes>
    </BrowserRouter>
  );
}

// Exo compteur avec usestate
/* function App() {
  const [count, setCount] = useState(0);
  
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };
  
  const resetCount = () => {
    setCount(0);
  };
  
  return (
    <div className="App">
    <h1>Compteur</h1>
    <p>{count}</p>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button> <br></br>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
} */

// import CourseItem from "./Components/CourseItem/CourseItem";
//Exo liste de courses
/* function App() {
  const courses = [
    { id: 1, nom: "Banane", quantite: 4, prix: 2.5 },
    { id: 2, nom: "Pomme", quantite: 5, prix: 3 },
    { id: 3, nom: "Lait", quantite: 1, prix: 2 },
    { id: 4, nom: "Café", quantite: 1, prix: 5 },
    { id: 5, nom: "Viande", quantite: 1, prix: 5 },
  ];

  const prixTotal = courses.reduce(
    (acc, course) => acc + course.prix * course.quantite,
    0
  );

  return (
    <div className="App">
      <h1>Ma liste de course</h1>

      <p style={{ color: "red" }}> Prix total : {prixTotal}€ </p>

      {courses.map((course, index) => (
        <CourseItem
          key={course.id}
          nom={course.nom}
          quantite={course.quantite}
          prix={course.prix}
        />
      ))}
    </div>
  );
} */

// import Exo from "./Components/Exos/exos";
// Petits exos
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Exos />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apprendre React
        </a>
      </header>
    </div>
  );
} */

export default App;
