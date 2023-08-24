import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { HomePage } from "./Pages/HomePage";
import { Favourites } from "./Pages/Favourites";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/favourite" Component={Favourites} />
      </Routes>
    </>
  );
}

export default App;
