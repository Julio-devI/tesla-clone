import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/userWrapperScroll';

import { Container, Header, Logo, Burguer, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
    const { scrollYProgress } = useWrapperScroll()

    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

    return (
        <Container>
            <Header>
                <Logo />
                <Burguer />
            </Header>

            <Footer style={{ opacity }}>
                <ul>
                    <li>
                        <a href="#">UI clone</a>
                    </li>
                    <li>
                        <a href="#">made with <3</a>
                    </li>
                    <li>
                        <a href="#">by JulioDevI</a>
                    </li>
                </ul>
            </Footer>
        </Container>
    )
}

export default UniqueOverlay