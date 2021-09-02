import React from 'react';
import styled from 'styled-components';
import CardTypeOne from '../Cards/CardTypeOne';

const Container = styled.div `
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	overflow-x: auto;
	// @media (min-width: 768px) {
 //        flex-direction: row;
 //    }
`;

function Staff() {
    return (
        <Container>
			<CardTypeOne 
				title="Walter Piccolo"
				description="Proffessional Tattooer"
				btn="See Work"
				bg="https://pbs.twimg.com/profile_images/1226970448971390977/Ss9fuGir_400x400.jpg"
			/>
			<CardTypeOne 
				title="Nicolas Ares"
				description="Piercing Master"
				btn="See Work"
				bg="https://images.squarespace-cdn.com/content/v1/5b970aa09f8770769426d7cd/1596484596071-OG35H3NTJ7XOXQ8XEGNB/ke17ZwdGBToddI8pDm48kE9MunuwmbWIMacjTSrRPddZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwiVvDRkVW6wuaewK1P7wuqfgB3c9P3F4x3lFr7YC8vk2tErOwr23wtHF4xij_PjIw/IMG_3EC1074DCBF2-1.jpg"
			/>
			<CardTypeOne 
				title="Julian Boccia"
				description="Talented Apprentice"
				btn="See Work"
				bg="https://images.squarespace-cdn.com/content/v1/5873e39aebbd1a717d93e3b1/1595104339147-GCCUT0X7E9XIBGS15QWZ/ke17ZwdGBToddI8pDm48kKmw982fUOZVIQXHUCR1F55Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw5XnxLBmEFHJGf_0qFdDpmIncOw4kq9OpCHNTYqzGO-E1YJr-Thht9Tdog4YtCwrE/IMG_9241.JPG"
			/>
		</Container>
    )
}

export default Staff