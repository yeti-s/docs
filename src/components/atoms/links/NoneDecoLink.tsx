import styled from "@emotion/styled";
import { Link } from "gatsby";

const NoneDecoLink = styled(Link)<{bold?: boolean}>`
  font-weight: ${({ bold = true }) => bold ? 'bold' : 'normal'};
  text-decoration: none;
`;

export default NoneDecoLink;