import Header from "./Header";
import { Routes, Route } from 'react-router-dom';
import NotFound from "./NotFound";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Chat from "./Chat";

function App() {

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/" element={<Chat />} />
        <Route path="/" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
