import styled from "styled-components";
import { space, textFont } from "styles/theme";

export const CardContainer = styled.div`
  border: 1px solid #707070;
  width: 226.38px;
  height: 285.01px;
  position: relative;
`;

export const CardContent = styled.div`
  position: absolute;
  height: fill-available;
  margin-top: ${space(8)};
  bottom: ${space(3)};
`;
export const PhotoContainer = styled.div`
  height: calc(100% - 74px);
  background: ${({ grad2: [start, finish] }) =>
    `linear-gradient(89.79deg, ${start} -19.39%, ${finish} 123.38%)`};
`;
export const PhotoFrame = styled.div`
  width: 174px;
  height: 176px;
  margin: auto;
  background: #000;
  border: 1px solid #707070;
  position: relative;
  top: -14px;
  display: flex;
    justify-content: center;
    align-items: center;
}
  img{
    margin:auto;
  }
`;

export const CardInfo = styled.div`
  height: 74px;
  background: ${({ grad1: [start, finish] }) =>
    `linear-gradient(89.79deg, ${start} -19.39%, ${finish} 123.38%)`};
`;
export const Title = styled.div`
  letter-spacing: 0.04em;
  ${textFont("md", "semibold")}
`;

export const Artiste = styled.div`
  ${textFont("xs", "medium")}
`;
