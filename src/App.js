import './App.css';
import TelaInicialProjeto from './componentes/TelaInicialProjeto';
import TelaJogando from './componentes/TelaJogando';
import TelaFimdeJogo from './componentes/TelaFimdeJogo';
import { useCallback,useState} from "react"
// Para importar Usamos chaves por ser uma variável e não termos utilizado Export Default.
import {palavrasLista} from "./Util/Word"
const estagios = [
  {id:1,nome: "ini"}, // 0 
  {id:2,nome: "Jogando"}, // 1
  {id:3,nome: "Fimjogo"} ] // 2
function App() { 
  // Por usar [0] define que vai começar o programa com Inicio.
  const [estagioJogo,setEstagiodoJogo] = useState (estagios[0].nome)
  const [palavrasJogo] = useState (palavrasLista)
  console.log("Palavras do Jogo: ",palavrasJogo)

  const [obterPalavratoJogo,setObterPalavratoJogo] = useState("");
  const [obterCategoriatoJogo,setObterCategoriatoJogo] = useState("");
  const [letrastoJogo,setLetrastoJogo] = useState([]);

  const funcaoCarregarPalavraeCategoria = useCallback ( () => {
    const listaCategorias = Object.keys(palavrasJogo)
    // Para arredondar para baixo -> Math.floor
    const categoria = listaCategorias[Math.floor(Math.random() * Object.keys(listaCategorias).length)]
    const palavraLocal = palavrasJogo[categoria][Math.floor(Math.random() * palavrasJogo[categoria].length)]
    // return usando {} - retorna um objeto, 
    // return usando [] retornaria um array.
    return {categoria,palavraLocal};
  }, [palavrasJogo] ); // Função acionada sempre que o valor desa variável alterar/mudar

  const funcaoIniciarJogo = () => {
    // obter palavra e categoria. Devem ter o mesmo nome utilizado no return.
    const {categoria,palavraLocal} = funcaoCarregarPalavraeCategoria();
    console.log ("Funcao Acionada Quando clicar no botão Começar o Jogo:")
    console.log ("*** Categorias:",categoria)
    console.log ("*** Palavra Local:",palavraLocal)

    let vetordaPalavra = palavraLocal.split("");
    vetordaPalavra = vetordaPalavra.map((letra) => letra.toLowerCase());
    
    setObterCategoriatoJogo (categoria);
    console.log("Palavra da categoria selecionada: ",categoria);
    setObterPalavratoJogo (palavraLocal);
    console.log("Categoria selecionada: ",palavraLocal);
    setLetrastoJogo(vetordaPalavra);
    console.log("Vetor da palavra: ",vetordaPalavra);


    setEstagiodoJogo (estagios[1].nome)
  }
  const funcaoProcessarLetraJogo = () => {
    setEstagiodoJogo (estagios[2].nome)
  }
  const funcaoVoltarInicioJogo = () => {
    setEstagiodoJogo (estagios[0].nome)
  }
  

  return (
    <div className="App">
      {/* <h1>Minha primeira aplicação WEB com RectJS.</h1>*/}
      {/*<TelaInicialProjeto/>*/}
      {console.log("Dica estagioJogo: ",estagioJogo)}
      {/*{estagioJogo === "ini" && <TelaInicialProjeto/>}*/}
      {estagioJogo === "ini" && <TelaInicialProjeto iniciarJogo={funcaoIniciarJogo}/>}
      {estagioJogo === "Jogando" && <TelaJogando processarLetraJogo={funcaoProcessarLetraJogo}/>}
      {estagioJogo === "Fimjogo" && <TelaFimdeJogo gameOverRetry ={funcaoVoltarInicioJogo}/>}
    </div>
  ); 
}
export default App;
