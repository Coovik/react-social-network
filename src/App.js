import cApp from "./App.module.css";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className={cApp.appWrapper}>
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;
