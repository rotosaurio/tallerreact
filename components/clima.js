import axios from 'axios';
import { useEffect,useState } from 'react';
export default function Clima() {
    const [data , setData] = useState(null);
    useEffect(() => {
        fetchData();
    },[]);
    const fetchData = async () => { 
        try { 
            const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=28.63528&longitude=-106.08889&current_weather=true");
            setData(response.data.current_weather.temperature);
            console.log(response.data.current_weather.temperature);
        }
        catch (error) {
            console.error(error);
        }};
        return (
            <>
            <div className='dg-gray-200'>
                {data && (
                                    <p>la temperatura es {data}</p>

                )}
            </div>
            </>
        );
}
        