import styled from 'styled-components'


export const Wrapper = styled.div`
  padding: 50px 0;
  text-align: center;

  p {
    text-align: center;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
    font-size: 18px;
    font-style: italic;
  }

  textarea {
    padding: 10px 12px;
    font-size: 18px;
    width: 100%;
    margin-bottom: 20px;
  }

  button {
    background: #267b20;
    color: white;
    border: none;
    font-size: 15px;
    padding: 8px 15px;
    box-shadow: 5px 3px 10px rgb(0, 0, 0, 0.7);
    transition: .4s linear;
    margin-right: 20px;
    text-decoration: none;
    border-radius: 8px;

    &:hover {
      background: #001f29;
      box-shadow: 3px 1px 5px rgb(0, 0, 0, 0.7);
    }

    &:active {
      background: white;
      color: #002837;
      box-shadow: 3px 1px 5px rgb(0, 0, 0, 0.7);
    }
  }

  //input[type="file"] {
  //  display: none;
  //}

  .custom-file-upload {
    background: #e51e25;
    border: 1px solid #e51e25;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    color: white;
    transition: .4s linear;
    margin-left: 10px;
    
    &:hover {
      background: white;
      color: #e51e25;
      box-shadow: 3px 1px 5px rgb(0, 0, 0, 0.7);
    }

    &:active {
      background: white;
      color: #002837;
      box-shadow: 3px 1px 5px rgb(0, 0, 0, 0.7);
    }
  }

  .text-left {
    text-align: initial;
    margin-bottom: 15px;
  }
`