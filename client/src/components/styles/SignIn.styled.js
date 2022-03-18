import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 80px 0;
  display: flex;
  justify-content: center;
  
  .form {
    width: 500px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px;
    padding: 20px;
  }
  
  label {
    font-size: 16px;
    font-weight: bold;
    padding: 0 10px;
    margin-bottom: 15px;
    display: block;
  }
  
  input {
    margin-bottom: 10px;
    display: block;
    width: 100%;
    padding: 5px 10px;
    border-radius: 8px;
    border: 1px solid cadetblue;
    &:focus {
      outline: 2px solid cadetblue;
      border: 1px solid cadetblue;
    }
  }
  
  button {
      background: #4e8a7d;
      color: white;
      border: none;
      font-size: 15px;
      padding: 8px 15px;
      box-shadow:  5px 3px 10px rgb(0,0,0,0.7);
      transition: .4s linear;
      margin-right: 20px;
      text-decoration: none;
      border-radius: 8px;

      &:hover {
        background: #001f29;
        box-shadow:  3px 1px 5px rgb(0,0,0,0.7);
      }

      &:active {
        background: white;
        color: #002837 ;
        box-shadow:  3px 1px 5px rgb(0,0,0,0.7);
      }
  }
`