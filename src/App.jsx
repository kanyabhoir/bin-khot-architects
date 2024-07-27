import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div className="container">
        <Header />
        <main className="main">
          <h2>Welcome to Bin Khot Architects</h2>
          <p>This is a simple website for demonstration purposes.</p>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
