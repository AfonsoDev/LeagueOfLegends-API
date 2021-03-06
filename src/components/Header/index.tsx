import React,{useContext} from 'react';
import { Container } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import {shade} from 'polished';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) =>{
    const { colors , title } = useContext(ThemeContext);
    return (
    <Container>
        Api lol
        <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={true}
            uncheckedIcon={true}
            height={10}
            width={40}
            handleDiameter={20}
            onColor={colors.secundary}
            offColor={shade(0.15, colors.primary)}
        />
    </Container>
    );
}

export default Header;