import './styles.css'

export default function Headline({ children, style }) {
    return(
        <h2 className="headline" style={style}>{children}</h2>
    )
}