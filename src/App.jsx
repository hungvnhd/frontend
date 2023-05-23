import CreateNewGame from "./components/CreateNewGame";
import PointData from "./components/PointData";
import { Route, Routes, Link } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreateNewGame />} />
        <Route path="round">
          <Route path="/round/:id" element={<PointData />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
