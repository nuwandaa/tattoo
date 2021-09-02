import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';

import Header from './components/Header/Header';
import PhoneBottomNav from './components/Navigation/PhoneBottomNav';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Detail from './components/Detail/Detail';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer.js';

import themes from './themes';

const Container = styled.div `
    background: ${props => props.theme.clrBgPrimary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    transition: all .3s ease;
`;

function App() {
    const [theme, setTheme] = useState('dark');
    return (
        <ThemeProvider theme={themes[theme]}>
            <Router>
                <Container>
                    <Header theme={theme} setTheme={setTheme} />
                    <Switch>
                        <Route path="/tattoo" exact>
                            <Home />
                        </Route>
                        <Route path="/tattoo/explore">
                            <Explore />
                        </Route>
                        <Route path="/tattoo/detail">
                            <Detail />
                        </Route>
                        <Route path="/tattoo/contact">
                            <Contact />
                        </Route>
                    </Switch>
                    <Footer />
                    <PhoneBottomNav theme={theme} setTheme={setTheme} />
                </Container>
            </Router>
        </ThemeProvider>
    );
}

export default App;