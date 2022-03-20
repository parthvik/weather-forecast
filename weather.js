//Complete the Weather API Backend part using openweathermap api
let setAPI = async({ lat, long, api, part }) => {
    try {
        // let lat = 13.08784
        // let lon = 80.27847
        let data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${part}&appid=${api}`)
        if (data.status === 200)
            return await data.json()


    } catch (error) {
        console.log(error);

    }
}
