import React from 'react';
import {Wrapper} from "./styles/Container.styled.js";

const Container = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default Container;