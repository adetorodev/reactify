import Form from "./component/Form";
import Hero from "./component/Hero";
import HeroBoundary from "./component/HeroBoundary";

function App() {
  return (
    <div>
      <HeroBoundary>
        <Hero heroName="Joker" />
      </HeroBoundary>
      <HeroBoundary>
        <Hero heroName="SuperMan" />
      </HeroBoundary>
      <HeroBoundary>
        <Hero heroName="Batman" />
      </HeroBoundary>

      {/* <Form /> */}
    </div>
  );
}

export default App;
