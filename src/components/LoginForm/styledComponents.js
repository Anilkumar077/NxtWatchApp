import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const LoginHomeImage = styled.img`
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 380px;
`
export const LoginLogo = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 15px;
`
export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`
export const LoginButton = styled.button`
  width: 100%;
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-family: 'Roboto';
  height: 30px;
  color: #ffffff;
  margin-top: 20px;
`
export const SubmitErrorMessage = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #ff0b37;
`
export const InputLabel = styled.label`
  font-size: 12px;
  font-family: 'Roboto';
  font-family: 500;
  color: '#475559';
`
export const UserInput = styled.input`
  font-size: 15px;
  font-weight: 400;
  font-family: 'Roboto';
  color: '#475569';
  outline: none;
  padding: 8px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
export const ShowPassword = styled.label`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #1e293b;
`

export default styled
