import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: #7159c1;
`;

export const HeaderContent = styled.section`
  max-width: 900px;
  max-height: 64px;
  height: 54px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #444;
    }
  }
`;
