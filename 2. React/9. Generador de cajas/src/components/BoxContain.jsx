
const BoxContain = (props) => {
    const box = {
        backgroundColor: props.color,
        width: props.width || '128px',
        height: props.height || '128px'
    }

    return (
        <div style={box}></div>
    )
}

export default BoxContain