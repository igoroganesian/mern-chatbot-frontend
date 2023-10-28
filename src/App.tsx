import Header from "./Header";
import { Routes, Route } from 'react-router-dom';
import { useAuth } from "./context/AuthContext";
import NotFound from "./NotFound";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Chat from "./Chat";

function App() {
  console.log(useAuth()?.isLoggedIn);

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
  );
}

export default App;
