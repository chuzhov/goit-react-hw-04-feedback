//const Section = ( { title, motto, children } ) => {
const Section = ( props ) => {
    return (
        <>
            <h2>{props.title}</h2>
            {/* <p>{props.motto}</p> */}
            {props.children}
        </>
    )
}

export default Section;