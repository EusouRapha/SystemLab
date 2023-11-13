import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <>
      <button>
        <Link to="/cadastrarlaboratorios">Cadastrar Laboratórios</Link>
      </button>
      <button>
        <Link to="/visualizarlaboratorios">Visualizar Laboratórios</Link>
      </button>
    </>
  );
}

export default HomeScreen;
