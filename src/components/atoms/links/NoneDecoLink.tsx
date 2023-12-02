import styled from "@emotion/styled";
import { Link } from "gatsby";

const NoneDecoLink = styled(Link)<{bold?: boolean}>`
  font-weight: ${({ bold = true }) => bold ? 'bold' : 'normal'};
  width: 100%;
  text-decoration: none;
`;

export default NoneDecoLink;