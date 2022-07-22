import Title2 from '../Title2'

import './styles.css'

export default function NoCard() {
    return (
        <>
            <li>
                <Title2>Você ainda não possui nenhum lançamento</Title2>
            </li>
            <li className='card'>
                <div className='grey-box'></div>
                <div className='grey-box grey-box--small'></div>
            </li>

            <li className='card'>
                <div className='grey-box'></div>
                <div className='grey-box grey-box--small'></div>
            </li>

            <li className='card'>
                <div className='grey-box'></div>
                <div className='grey-box grey-box--small'></div>
            </li>
        </>
    )
}