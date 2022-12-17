const Section = ( { title, motto, children } ) => {
//const Section = ( props ) => {
    return (
        <>
            <h2>{title}</h2>
            { motto && <p>{motto}</p> }
            { children }
        </>
    )
}

export default Section;