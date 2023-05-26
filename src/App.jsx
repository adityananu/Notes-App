import View from "./pages/View";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import SingleView from "./pages/SingleView";
import Header from "./comopnents/Header";

function App() {
  return (
    <>
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/singleView/:id" element={<SingleView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
