const Card=(data)=>{
    console.log(data)
    const{title,image,desc}=data;
    return(

        <div className="cards">
            <h1>{title}</h1>
        </div>
    )
}
export default Card;