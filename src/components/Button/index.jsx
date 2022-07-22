import './styles.css'

export default function Button({ children, style, onClick }) {
    return(
        <button onClick={onClick} className="button" style={style}>{children}</button>
    )
}