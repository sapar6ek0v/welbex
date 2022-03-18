import React from 'react';
import {Bars} from "react-loader-spinner";
import {Wrapper} from "./styles/Loader.styled.js";


const Loader = () => {
    return (
        <Wrapper>
            <Bars heigth="100" width="100" color="green" arialLabel="loading-indicator" />
        </Wrapper>
    );
};

export default Loader;