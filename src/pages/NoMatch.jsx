import React from 'react'; 
import styled from 'styled-components';

const Styles = styled.div`    

`;

const NoMatch = () => {

    return (
        <Styles>
            <div className="row">
                <div className="container">
                    <h3>THE PAGE NOT FOUND</h3>
                </div>
            </div>
        </Styles>
    );
};

export default NoMatch;