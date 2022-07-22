import './styles.css'
import { FaTrash } from 'react-icons/fa'

export default function RemoveIcon({ onClick }) {
    return(
        <button onClick={onClick} className='remove-icon'>
            <FaTrash/>
        </button>
    )
}