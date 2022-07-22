import './styles.css'

export default function CustomSelect({ onChange }) {
    return(
        <select onChange={onChange} className='custom-select'>
            <option className='option' value="Entrada">Entrada</option>
            <option className='option' value="Despesa">Despesa</option>
        </select>
    )
}