import React, { Component } from "react"
import styled from "styled-components"
import NumberFormat from "react-number-format"
import { connect } from "react-redux"
import { inputTracker, emailTracker } from "../../ducks/reducer"
import Logo from "../../img/Stage3.png"

const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #003e76;
`

const FormTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
`

const FormContainer = styled.section`
  background: lightgray;
  height: 460px;
  width: 460px;
  padding: 24px;
`

const Test = styled.input`
  outline: none;
  border: 1px solid black;
`

const InputContainer = styled.section`
  margin-top: 16px;
`

const InputSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`

const Button = styled.button`
  background: #11cd75;
  color: white;
  padding: 5px 15px;
  outline: none;
  border: none;
  margin: 10px 0;
  font-weight: bold;
`

const Notes = styled.section`
  color: white;
`

const Img = styled.img`
  height: 38px;
  display: flex;
  margin: 0 5px;
`

class App extends Component {
  state = {
    textOnly: ""
  }

  textOnly(e) {
    const value = e.target.value.replace(/[^a-zA-Z-@]/g, "")
    this.setState(
      {
        textOnly: value
      },
      _ => console.log(this.state.textOnly)
    )
  }

  handleSubmit = () => {
    alert(
      "you just sent " +
        this.props.phoneNumber +
        " to the back." +
        " as well as info on state. " +
        this.state.textOnly
    )
  }

  render() {
    return (
      <Container>
        <FormContainer onSubmit={() => this.handleSubmit()}>
          <FormTitle>
            Stage <Img src={Logo} alt="Nuttin" /> Challenge
          </FormTitle>
          <InputSection>
            <InputContainer>
              <div>This Box allows phone number only: </div>
              <NumberFormat
                placeholder="Phone Number..."
                customInput={Test}
                onChange={e => this.props.inputTracker(e)}
                displayType="tel"
                format="(###) ###-####"
              />
            </InputContainer>
            <InputContainer>
              <div>This Box allows text only: </div>
              <input
                type="text"
                placeholder="Text Only"
                onChange={e => this.textOnly(e)}
              />
            </InputContainer>
            <InputContainer>
              <div>This Box checks if its an email</div>
              <input
                type="text"
                placeholder="Email..."
                onChange={e => this.props.emailTracker(e)}
              />
            </InputContainer>
            <InputContainer>
              <div>This Box only accepts numbers</div>
              <input type="number" placeholder="Nums Only" />
            </InputContainer>
          </InputSection>
          <Button onClick={_ => this.handleSubmit()}>Submit</Button>
          <Notes>
            Notes:
            <Notes>I set the Phonenumber to track on state.</Notes>
            <Notes>Text Only is set in the component on state.</Notes>
            <Notes>
              Text Only allows numbers / regular text* (am still looking into
              how to only allow LETTERs)
            </Notes>
            <Notes>
              Email Bonus I am currently still looking into how to Desanitize /
              Check is valid email. ( i tried using some regex.replace but need
              to play with it a little more)
            </Notes>
          </Notes>
        </FormContainer>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    phoneNumber: state.phoneNumber,
    email: state.email
  }
}

export default connect(
  mapStateToProps,
  { inputTracker, emailTracker }
)(App)
