import styled from "styled-components"

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  background: #2e312d;
  z-index: 100;
  
  .header {
    padding: 25px 0;
    align-items: center;
  }
  
  .header {
    display: flex;
    &_btn {
      background: #267b20;
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
    
    &_logout {
      margin-left: auto;
    }
  }
`