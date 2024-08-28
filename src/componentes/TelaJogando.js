import "./TelaJogando.css"

const TelaJogando = ({processarLetraJogo}) => {
      return (
          <div className='tela_inicial'>
              <h1>Tela Jogando</h1>
              <button onClick={processarLetraJogo}> Finalizar Jogo</button>
          </div>
      )
  }
  export default TelaJogando
