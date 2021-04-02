import React from 'react';

class App extends React.Component {

  state = {
    nome : 'Benedito Marcos Bruzanosco'
  }

  modificarNome = (e) => {
    this.setState({
      nome: e.target.value
    })
  }

  criaComboBox = () => {
    const opcoes = ["Fulano", "Cicrano"]
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)

    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  render(){
    const MeuComboBox = () => this.criaComboBox()

    return(
      <React.Fragment>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello: {this.state.nome}</h1>
        <MeuComboBox />
      </React.Fragment>
    )
  }
}

export default App;