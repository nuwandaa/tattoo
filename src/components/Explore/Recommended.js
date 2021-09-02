import React from 'react';
import styled from 'styled-components';
import CardTypeTwo from '../Cards/CardTypeTwo';

const Container = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    overflow-x: auto;
`;

function Recommended() {
    return (
        <Container>
            <CardTypeTwo 
                link="/detail"
                image="https://images.unsplash.com/photo-1588031710692-25195b092ab1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                title="Quote Typo"
                stars={4.5}
                subtitle="Nice Typography"
            />
            <CardTypeTwo 
                link="/detail"
                image="https://images.unsplash.com/photo-1570168983832-8989dae1522e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=501&q=80"
                title="Minimalistic"
                stars={4.8}
                subtitle="Thin Lines"
            />
            <CardTypeTwo 
                link="/detail"
                image="https://images.unsplash.com/photo-1601848714157-d845bb5c11ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGF0dG9vfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Coloured"
                stars={4.8}
                subtitle="Nice and Colorful"
            />
            <CardTypeTwo 
                link="/detail"
                image="https://images.unsplash.com/photo-1583978750977-beaff5f35af1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHRhdHRvb3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Map"
                stars={4.3}
                subtitle="With or with filling"
            />
        </Container>
    )
}

export default Recommended