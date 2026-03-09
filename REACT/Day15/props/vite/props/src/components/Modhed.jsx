








function MOdhed({price}){
    return(
        <>
        {price.map((i)=>(
            <h1 key={i.it}>
            <h2>{i.it}</h2>
            <p>{i.amount}</p>
            </h1>

        ))}
        </>
    )
}
export default MOdhed









