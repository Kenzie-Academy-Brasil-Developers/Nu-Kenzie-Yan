import './styles.css'

export default function Title4({ children, style }) {
    return(
        <h2 className="title4" style={style}>{children}</h2>
    )
}