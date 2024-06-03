import "./App.css";

// Components
import Title from "./components/Title";
import Presentation from "./components/Presentation";

// Images
import reactLogo from "./assets/img/react.svg";
import viteLogo from "/vite.svg";

const App = () => {
  console.log("j'appelle mon composant App");

  const salutation = "Hola";

  return (
    <>
      <h1
        style={{
          backgroundColor: "red",
          color: "blue",
        }}
      >
        Hello
      </h1>
      <p>{salutation}</p>
      <p id="paragraph">coucou les amis</p>
      <p className="coucou">Bonjour à tous</p>
      <Title text="Bienvenue au Reacteur" />
      <Title text="JavaScript" />
      <Title text="React" />
      {/* <Presentation name="Lucas" age={25} />
      <Presentation name="Bastien" age={30} /> */}

      <Presentation name="Tom" age={28} color="red" />
      <Presentation name="Bastien" age={30} color="gold" />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Apollo_11_Saturn_V_lifting_off_on_July_16%2C_1969.jpg/1200px-Apollo_11_Saturn_V_lifting_off_on_July_16%2C_1969.jpg"
        alt=""
      />
      <img src={reactLogo} alt="" />
      <img src={viteLogo} alt="" />
    </>
  );
};

export default App;
