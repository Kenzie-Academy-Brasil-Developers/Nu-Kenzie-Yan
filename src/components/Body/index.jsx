import './styles.css'

export default function Body({ children, style }) {
    return(
        <h2 className="body" style={style}>{children}</h2>
    )
}