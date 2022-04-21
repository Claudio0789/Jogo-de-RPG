import styled from "styled-components";

export const Container = styled.div`
    background-color: #24282F;
    min-height: 100vh;
    color: #FFF;

    .left {
        margin-left: 85px;
    }

    button {
        color: #000;
        background-color: #CCC;
        border: 0;
        margin-top: 40px;
        margin-right: 30px;
        cursor: pointer; 
        padding: 10px;

        &:hover {
            background-color: #FFF;
        }
    }
`;

export const Map = styled.div`
    width: 480px;
    height: 480px;
    background-image: url('/assets/map.png');
    background-position: left top;
    background-size: 100%;
`;