import './styles.css'

export default function ValueInput({ onChange }) {
    return(
        <input onChange={onChange} className="value-input" type='number' placeholder='$'/>
    )
}