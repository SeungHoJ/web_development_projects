import { CarResponse } from "../types";
import axios from "axios";

export const getCars = async() : Promise<CarResponse[]> => {
    const resp = await axios.get(`http://localhost:8080/api/cars`);
    return resp.data._embedded.cars;
}

export const deleteCar = async (link:string) : Promise<CarResponse> => {
    const resp = await axios.delete(link);
    return resp.data
} 