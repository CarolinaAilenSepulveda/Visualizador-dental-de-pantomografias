import styled from "styled-components"

export const HStackContainer = styled.div`
  margin-top: 300px;
  overflow-x: scroll;
  padding: 40px 0;
  width: 80%;
  display: flex;
  flex-direction: row;
  gap: 10px;

  ::-webkit-scrollbar {
    width: 6px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #25408b;
  }
`
