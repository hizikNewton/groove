import React from "react";
import { StyledContainer } from "./styled";

const PageContainer = ({ children }) => {
  return (
    <StyledContainer className={"page-container"}>{children}</StyledContainer>
  );
};

export default PageContainer;
