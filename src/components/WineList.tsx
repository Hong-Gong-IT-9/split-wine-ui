const WineList = () =>{
    const wines = [
    {name:"Pepperjack Barossa Shiraz 750mL", price: 25},
    {name:"Jam Shed Shiraz 750mL", price: 10}]
    
    return <div>
        {wines.map((w)=> (<h2>Price for {w.name} is ${w.price}.</h2>))}
    </div>
}


export default WineList;