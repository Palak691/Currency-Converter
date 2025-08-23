// export async function getExchangeCurrency(){
//     let url = "https://api.exchangerate.host/latest" ;
//     let data1 =  await fetch(url);
//     let data = await data1.json();
//     console.log(data)
    
// }

// getExchangeCurrency()

export async function getExchangeCurrency({from}) {
    try {let url = `https://open.er-api.com/v6/latest/${from}`;
    let data1 = await fetch(url);
    let data = await data1.json();
    let rate = await data.rates
    console.log(rate); // For debugging
    return rate // Return data so it can be used outside
    }catch(e){
        console.log("Error",e)
    }
}

// getExchangeCurrency({from : "INR"});
