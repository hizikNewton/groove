import styled from "styled-components";
import { space } from "styles/theme";

const HR = styled.hr`
  margin: 0;
  margin-bottom: ${space(4)};
  border: 1px solid #282828;
`;
export const Divider = () => {
  return <HR />;
};
