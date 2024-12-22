import axios from "axios";
export const getPokemonList = async () => {
    try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
    console.log(response.data.results);
    return response.data.results
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
//pengaturan API 
//1.buat folder dan file khusus pengaturan api
//2.fetch data API dilakukan disini
//dont forget to import Axios cause to call API
