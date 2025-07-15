// import { RouterProvider} from "react-router";
import { Routes, Route } from 'react-router-dom'
// import routes from "./components/routes/route"; // adjust path as needed
import Auth from './components/auth/Auth';
import QueryPage from './components/QueryPage/QueryPage';
import "./App.css"


function App() {
  return <Routes>
  <Route path="/" element={<Auth />} />
  <Route path="/ask" element={<QueryPage />} />
  <Route path="*" element={<QueryPage />} />
</Routes>;
}

export default App;