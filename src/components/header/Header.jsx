//styles
import './Header.css';
//components
import Button from '../button/Button';
 //images
import logoLight from '../../assets/logo-desktop.svg'
import logoDark from '../../assets/logo-mobile-modo-noct.svg'


function Header({
    isDark,
    onClick
}) {
    return (
        <header>
           {/*  ternaries to show diferent logos depending on the light dark version */}
            {isDark ? 
            <img src={logoDark} alt="logo" className= 'logo' /> :
            <img src={logoLight} alt="logo" className= 'logo' /> }            
            <Button onClick= { onClick }>
                MODO
                {isDark ? " LIGHT " : " DARK "} 
            </Button>
        </header>
    );
}

export default Header;