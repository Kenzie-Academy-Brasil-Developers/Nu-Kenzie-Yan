import './styles.css'

export default function DefaultInput({ placeholder, onChange }) {
    return(
        <input onChange={onChange} className="default-input" type='text' placeholder={ placeholder }/>
    )
}