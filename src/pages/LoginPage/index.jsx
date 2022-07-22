import Title1 from '../../components/Title1'
import Headline from '../../components/Headline'
import Button from '../../components/Button'
import logo from '../../assets/img/logo.svg'
import loginImg from '../../assets/img/login-img.svg'
import './styles.css'

export default function LoginPage({ setIsLogged }) {
    const handleLogin = () => {
        setIsLogged(true)
    }

    return (
        <section className='body--login'>
            <section className='login-container'>
                <img className='logo' src={logo} alt="Nu Kenzie logo"/>
                <Title1 style={{color: 'white', fontSize: '38px'}}>Centralize o controle das suas finanças</Title1>
                <Headline style={{color: 'white'}}>de forma rápida e segura</Headline>
                <Button onClick={handleLogin} style={{maxWidth: '241px'}}>Iniciar</Button>
            </section>
            <img className='banner' src={loginImg} alt="Login Nu Kenzie imagem"/>
        </section>
    )
}