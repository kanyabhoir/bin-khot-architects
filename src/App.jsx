import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { animated, useSpring } from "@react-spring/web";

function App() {

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    from: { transform: "translateY(-100%)" },
    to: { transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  const cardAnimation = useSpring({
    from: { transform: "scale(0.8)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
    config: { duration: 500 },
    delay: 1000,
  });
 

  return (
    <>
      <div className="container">
        <main className="main">
          <animated.div style={fadeIn} className="header2">
            <Header />
          </animated.div>
          <animated.div
            style={slideIn}
            className="content"
          >
            <h2>Welcome to Bin Khot Architects</h2>
            <p>This is a simple website for demonstration purposes.</p>
           
            <div className="cards">
              <animated.div style={cardAnimation} className="card">
                <h2>Card 1</h2>
                <p>Some interesting content here.here</p>
              </animated.div>
              <animated.div style={cardAnimation} className="card">
                <h2>Card 2</h2>
                <p>Some more interesting content here.</p>
              </animated.div>
              <animated.div style={cardAnimation} className="card">
                <h2>Card 3</h2>
                <p>Even more interesting content here.</p>
              </animated.div>
            </div>
            <div className="cards2">
              <animated.div style={cardAnimation} className="card">
                <h2>Card 4</h2>
                <p>Some interesting content here.here</p>
              </animated.div>
              <animated.div style={cardAnimation} className="card">
                <h2>Card 5</h2>
                <p>Some more interesting content here.</p>
              </animated.div>
              <animated.div style={cardAnimation} className="card">
                <h2>Card 6</h2>
                <p>Even more interesting content here.</p>
              </animated.div>
            </div>
          </animated.div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
