import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import Home from "./pages/Home";

createRoot(document.getElementById("root")).render(<App />);


function App() {
  return <Home />;
}

export default App;