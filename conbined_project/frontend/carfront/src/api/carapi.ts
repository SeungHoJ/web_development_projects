import { Car, CarEntry, CarResponse } from "../types";
import axios from "axios";

export const getCars = async() : Promise<CarResponse[]> => {
    const resp = await axios.get(`http://localhost:8080/api/cars`);
    return resp.data._embedded.cars;
}

export const deleteCar = async (link:string) : Promise<CarResponse> => {
    const resp = await axios.delete(link);
    return resp.data
}

export const addCar = async (car: Car) : Promise<CarResponse> => {
    const resp = await axios.post(`${import.meta.env.VITE_API_URL}/api/cars`,car,{
        headers : {
            'Content-Type' : 'application/json',
        }
})

return resp.data;
}

export const updateCar = async (carEntry : CarEntry) : Promise<CarResponse> => {
    const resp = await axios.put(carEntry.url,carEntry.car,{
        headers : {
            'Content-Type' : 'application/json'
        },
    });

    return resp.data;
}