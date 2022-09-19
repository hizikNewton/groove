import styled from "styled-components";
import banner from "assets/images/banner.svg";
import { space } from "styles/theme";
export const StyledHeader = styled.header`
  margin: auto;
  .header-container {
    padding: ${space(4, 0)};
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      display: none;
    }
  }
  button {
    border: none;
    background: #0f0f0f;
    height: fit-content;
  }
  .input-wrapper {
    margin-left: ${space(20)};
    position: relative;
    label {
      position: absolute;
      transform: translate(17px, 23px);
    }
    input {
      padding: 0px;
      width: 471px;
      height: 56px;
      background: transparent;
      border: 1px solid #e5e5e5;
      outline-style: none;
    }
  }
`;

export const Banner = styled.div`
  height: 255px;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: right center;
  .udux {
    padding-top: ${space(8)};
    padding-left: ${space(10)};
    width: fit-content;
  }
  .omah-lay {
    width: fit-content;
    position: absolute;
    right: 0;
    margin-right: ${space(4)};
    bottom: ${space(2)};
  }
`;
