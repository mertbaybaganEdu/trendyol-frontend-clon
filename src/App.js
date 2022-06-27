
import Helmet from "react-helmet";
import "./app.scss";


import HomePage from "./Pages/CategoriPages/HomePage";
import Header from "./components/Header/Header";

function App() {


  return (
    <div className="container">
      <Helmet>
        <title>Anasayfa</title>
      </Helmet>
        <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
