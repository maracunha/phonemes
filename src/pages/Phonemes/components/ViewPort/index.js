import styled from '@emotion/styled';

const ViewPort = styled.div`
overflow: hidden;
position: absolute;
border-radius: 2.4rem;
width: ${props => props.width}px;
height: ${props => props.height}px;
`

export default ViewPort;
