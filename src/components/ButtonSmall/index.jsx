import './styles.css'

export default function ButtonSmall({ children, style, className, onClick }) {
    return(
        <button onClick={onClick} className={`button-small ${className}`} style={style}>{children}</button>
    )
}