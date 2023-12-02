import styled from "@emotion/styled";

const Grid = styled.div<{width:number, justify?:boolean, align?:boolean}>`
    display: flex;
    width: ${p=>p.width}%;
    align-items: ${({align = false}) => align ? 'center' : 'unset'};
    justify-contents: ${({justify = false}) => justify ? 'center' : 'unset'};
`;

export default Grid;