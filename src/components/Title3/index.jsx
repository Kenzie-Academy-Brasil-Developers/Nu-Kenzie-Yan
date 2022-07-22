import './styles.css'

export default function Title3({ children, style }) {
    return(
        <h2 className='title3' style={style}>{children}</h2>
    )
}