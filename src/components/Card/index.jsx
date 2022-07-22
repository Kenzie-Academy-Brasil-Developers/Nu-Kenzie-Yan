import Title3 from '../Title3'
import Body from '../Body'
import RemoveIcon from '../RemoveIcon'
import NoCard from '../NoCard'

import './styles.css'

export default function Card({ list, setCardList, setFilteredList, filteredList }) {
    const handleRemove = (id) => {
        if(filteredList) {
            setFilteredList(oldCardList => oldCardList.filter(card => card.id !== id))
            setCardList(oldCardList => oldCardList.filter(card => card.id !== id))
        } else {
            setCardList(oldCardList => oldCardList.filter(card => card.id !== id))
        }
    }

    return(
        <>
            {
                list.length < 1 ?
                <>
                    <NoCard/>
                </>
                :
                    filteredList ?
                        filteredList.length > 0 ?
                            filteredList.map(({ description, quantity, type, id }, index) => (
                                <li key={index} className={`${type === 'Entrada' ? 'card card--border-green' : 'card'}`}>
                                    <div className='info-container'>
                                        <Title3>{description}</Title3>
                                        <Body>R$ {Math.abs(quantity).toFixed(2).toString().replace('.', ',')}</Body>
                                        <RemoveIcon onClick={() => handleRemove(id)}/>
                                    </div>
                                    <Body>{type}</Body>
                                </li>
                            ))
                        :
                            <>
                                <NoCard/>
                            </>
                    :
                        list.map(({ description, quantity, type, id }, index) => (
                            <li key={index} className={`${type === 'Entrada' ? 'card card--border-green' : 'card'}`}>
                                <div className='info-container'>
                                    <Title3>{description}</Title3>
                                    <Body>R$ {Math.abs(quantity).toFixed(2).toString().replace('.', ',')}</Body>
                                    <RemoveIcon onClick={() => handleRemove(id)}/>
                                </div>
                                <Body>{type}</Body>
                            </li>
                        ))
            }
        </>
    )
}