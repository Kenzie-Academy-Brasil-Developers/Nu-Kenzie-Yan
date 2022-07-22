import './styles.css'

export default function Title1({ children, style }) {
    return(
        <h1 className="title1" style={style}>{children}</h1>
    )
}