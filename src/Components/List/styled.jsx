import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  flex-wrap: wrap;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    li {
      margin: 10px;
      padding: 10px;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      width: 20%;
      border-radius: 8px;
      align-items: center;
      justify-content: center;
      span {
        font-size: 15px;
        text-align: center;
        line-height: 20px;
        img {
          max-width: 200px;
          max-height: 200px;
        }
      }
      .value {
        font-weight: bold;
        color: #f8d210;
      }
    }button{
        width: 100%;
        height: 5vh;
        background-color: #4C5270;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        font-weight: bold;
        color: #F4EBD0;
    }
  }
`;
