import React from "react"

export default class Alunas extends React.Component {
  render() {
    return (
      <>
        <p>
          {this.props.nome} - {this.props.idade}
        </p>
      </>
    )
  }
}
