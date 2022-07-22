import logo from '../../assets/img/logo-black.svg'
import ButtonSmall from '../../components/ButtonSmall'
import Body from '../../components/Body'
import DefaultInput from '../../components/DefaultInput'
import ValueInput from '../../components/ValueInput'
import CustomSelect from '../../components/CustomSelect'
import Button from '../../components/Button'
import Title3 from '../../components/Title3'
import Card from '../../components/Card'
import { useEffect, useState } from 'react'

import './styles.css'

export default function Dashboard({ setIsLogged }) {
    const [cardList, setCardList] = useState([])
    const [filteredCards, setFilteredCards] = useState(null)
    const [totalMoney, setTotalMoney] = useState(0)
    const [counter, setCounter] = useState(0)
    const [cardDescription, setCardDescription] = useState('')
    const [moneyQuantity, setMoneyQuantity] = useState('')
    const [entryType, setEntryType] = useState('Entrada')
    const allTagButton = document.querySelectorAll('.flag')

    const handleLogout = () => {
        setIsLogged(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const entries = {
            id: counter,
            description: cardDescription,
            quantity: entryType === 'Despesa' ? -(Number(moneyQuantity)) : Number(moneyQuantity),
            type: entryType
        }

        setCardList(oldCardList => [...oldCardList, entries])
        setCounter(oldCounter => oldCounter + 1)
    }

    const handleFilterAll = (event) => {
        setFilteredCards(null)

        allTagButton.forEach(button => button.classList.remove('button-small--selected'))
        event.target.classList.add('button-small--selected')
    }

    const handleFilterEntries = (event) => {
        setFilteredCards(() => cardList.filter(({ type }) => type === 'Entrada'))

        allTagButton.forEach(button => button.classList.remove('button-small--selected'))
        event.target.classList.add('button-small--selected')
    }

    const handleFilterExpenses = (event) => {
        setFilteredCards(() => cardList.filter(({ type }) => type === 'Despesa'))

        allTagButton.forEach(button => button.classList.remove('button-small--selected'))
        event.target.classList.add('button-small--selected')
    }

    useEffect(() => setTotalMoney(cardList.reduce((currentValue, nextValue) => currentValue + nextValue.quantity, 0)), [cardList])

    return (
        <section className='body--dashboard'>
            <header className='header'>
                <div className='header__content'>
                    <img src={logo} alt="Nu Kenzie logo"/>
                    <ButtonSmall onClick={handleLogout}>Início</ButtonSmall>
                </div>
            </header>

            <main className='main'>
                <aside>
                    <form onSubmit={event => handleSubmit(event)} className='controller-container'>
                        <Body style={{marginBottom: '12.1px'}}>Descrição</Body>
                        <DefaultInput onChange={event => setCardDescription(event.target.value)} placeholder='Digite aqui sua descrição'/>
                        <Body style={{color: 'var(--grey-50)', margin: '4.4px 0px 17.7px 0px'}}>Ex: Compra de roupas</Body>

                        <div className='inputs-container'>
                            <div className='input-content'>
                                <Body style={{marginBottom: '9px'}}>Valor</Body>
                                <ValueInput onChange={event => setMoneyQuantity(event.target.value)}/>
                            </div>

                            <div className='input-content'>
                                <Body style={{marginBottom: '9px'}}>Tipo de valor</Body>
                                <CustomSelect onChange={event => setEntryType(event.target.value)}/>
                            </div>
                        </div>
                        <Button style={{marginTop: '19px'}}>Inserir valor</Button>
                    </form>

                    {
                        cardList.length < 1 ?
                            <></>
                        :
                        <section className='controller-container controller-container--secondary'>
                            <div className='total-container'>
                                <Title3>Valor total:</Title3>
                                <Title3 style={{color: 'var(--primary-color)'}}>$ {totalMoney}</Title3>
                            </div>
                            <Body style={{margin: '6px'}}>O valor se refere ao saldo</Body>
                        </section>
                    }
                </aside>

                <section className='card-container'>
                    <div className='filter-wrap'>
                        <Title3>Resumo financeiro</Title3>
                        <nav className='filter-container'>
                            <ButtonSmall onClick={(event) => handleFilterAll(event)} className='flag button-small--selected'>Todos</ButtonSmall>
                            <ButtonSmall onClick={(event) => handleFilterEntries(event)} className='flag'>Entradas</ButtonSmall>
                            <ButtonSmall onClick={(event) => handleFilterExpenses(event)} className='flag'>Despesas</ButtonSmall>
                        </nav>
                    </div>

                    <ul className='card-list'>
                        <Card list={cardList} filteredList={filteredCards} setCardList={setCardList} setFilteredList={setFilteredCards}/>
                    </ul>
                </section>
            </main>
        </section>
    )
}