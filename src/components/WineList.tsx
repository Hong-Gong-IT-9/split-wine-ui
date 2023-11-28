const WineList = () =>{
    const wines = [{name:"Pepperjack Barossa Shiraz 750mL", price: 25},{name:"Jam Shed Shiraz 750mL", price: 10}]
    return <div>
        {wines.map((wine)=> (<h2>Price for {wine.name} is ${wine.price}.</h2>))}
    </div>
}


export default WineList;