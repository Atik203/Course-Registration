import "./App.css";
import Cards from "./Components/Cards/Cards";

function App() {
  return (
    <div className="w-[95%] mx-auto my-10">
      <h1 className="text-3xl font-bold text-center text-[#1C1B1B] my-10">
        Course Registration
      </h1>
      <Cards></Cards>
    </div>
  );
}

export default App;
