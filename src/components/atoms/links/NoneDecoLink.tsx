import styled from "@emotion/styled";
import { Link } from "gatsby";

const NoneDecoLink = styled(Link)`
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export default NoneDecoLink;