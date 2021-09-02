import React from 'react';
import PhoneBottomBtn from './PhoneBottomBtn';
import Header from './Header';
import Description from './Description';
import Images from './Images';
import { useHistory } from 'react-router-dom';

function Detail() {
    const image = "https://images.unsplash.com/photo-1588031710692-25195b092ab1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80";
    let history = useHistory();
    return (
        <React.Fragment>
        	<Header 
        		mainImage={image}
        		title={"Quote Tattoo"}
        		stars={"4.6"}
        		goBack={history.goBack}
        	/>
        	<Description text="Lorem ipsum dolor, sit amet consectetur, adipisicing elit. 
        		Modi ipsa fuga porro doloribus autem mollitia quasi, harum excepturi voluptatibus 
        		laudantium, sit amet consectetur, adipisicing elit. 
        		Modi ipsa fuga porro doloribus autem mollitia quasi, harum excepturi voluptatibus laudantium"
			/>
			<Images />
        	<PhoneBottomBtn price={"12"} />
        </React.Fragment>
    )
}

export default Detail