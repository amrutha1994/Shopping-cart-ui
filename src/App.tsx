import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import Home from "./pages/Home";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Container>
  );
}

export default App;
