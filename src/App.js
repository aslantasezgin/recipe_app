import CardForRecipes from "./components/CardForRecipes/CardForRecipes";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <CardForRecipes></CardForRecipes>
    </div>
  );
}

export default App;
