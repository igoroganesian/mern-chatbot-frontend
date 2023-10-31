import Header from "./Header";
import { Routes, Route } from 'react-router-dom';
import { useAuth } from "./context/AuthContext";
import NotFound from "./NotFound";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Chat from "./Chat";

function App() {
  const auth = useAuth();

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {auth?.isLoggedIn && auth.user && (
          <Route path="/chat" element={<Chat />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
