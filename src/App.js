import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBox from "./components/MainBox";

function App() {
  return (
    <>
      <Header />
      <div className="app_box">
        <MainBox />
      </div>
      <Counter />
      <Footer />
    </>
  );
}

export default App;
