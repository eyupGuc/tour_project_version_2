const Card=(data)=>{
    console.log(data)
    const{title,image,desc}=data;
    return(

        <div className="cards">
            <div>
            <h1>{title}</h1>
            <img src={image} alt="img" />
            <div>
                <p>{desc}</p>
            </div>
            </div>
        </div>
    )
}
export default Card;