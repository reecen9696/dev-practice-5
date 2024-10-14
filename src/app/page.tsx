import Main from "./pages/mainPage";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <Main />
      </div>
    </div>
  );
}
