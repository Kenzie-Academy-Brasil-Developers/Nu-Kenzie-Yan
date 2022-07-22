import './styles.css'

export default function Title2({ children, style }) {
    return(
        <h2 className="title2" style={style}>{children}</h2>
    )
}