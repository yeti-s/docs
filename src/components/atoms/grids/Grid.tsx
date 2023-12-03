import styled from "@emotion/styled";

const Grid = styled.div<{width?:number, justify?:boolean, align?:boolean, container?:boolean}>`
    display: flex;
    width: ${p=>p.width ? `${p.width}%` : null};
    align-items: ${({align = false}) => align ? 'center' : 'unset'};
    justify-contents: ${({justify = false}) => justify ? 'center' : 'unset'};
    flex-direction: ${({container = false}) => container ? 'column' : 'row'};
`;

export default Grid;