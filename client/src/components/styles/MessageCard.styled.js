import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  
  .card {
    padding: 25px;
    background: #2e312d;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px;
  }
  
  p {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  button {
    background: #4e8a7d;
    color: white;
    border: none;
    font-size: 15px;
    padding: 7px 12px;
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
  
  .red {
    background: #8a1922;
  }
  
  .green {
    background: #267b20;
  }
  
  input {
    height: 100%;
    width: 100%;
    background: black;
    border: 2px solid white;
    color: white;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 5px 10px;
    word-break: break-all;
    overflow: auto;
    &:focus {
      outline: 2px solid red;
    }
  }
  span {
    word-break: break-all;
  }
`