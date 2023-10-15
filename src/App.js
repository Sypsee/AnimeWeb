import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popular from "./Components/popular";
import AnimeItem from "./Components/AnimeItem";
import AnimeEpisode from "./Components/AnimeEpisode";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Popular />}></Route>
        <Route path="/anime/:id" element={<AnimeItem />}></Route>
        <Route path="/anime/:id/watch/:ep" element={<AnimeEpisode />}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;