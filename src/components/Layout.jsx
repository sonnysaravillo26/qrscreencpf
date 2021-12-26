import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`

`;

// EXTRA LAYER TO LAYOUT THE PAGE
const Layout = (props) => {

    return (
        <Styles>
            {props.children}
        </Styles>
    );
};

export default Layout;
