import { useQuery } from "@tanstack/react-query";
import { CarResponse } from "../types";
import axios from "axios";

function CarList(){
  const getCars = async(): Promise<CarResponse[]> => {
    const resp = await axios.get("http://localhost:8080/api/cars");
    return resp.data._embedded.cars;
  }

  const { data , error, isSuccess } =  useQuery({
    queryKey: ["cars"],
    queryFn: getCars
  });

  if(!isSuccess){
    return <span>Loading 중 ...</span>
  }
  else if(error){
    return <span>자동차 데이터 가져오는 중 오류 발생..!</span>
  }
  else{
    return(
      <table>
        <tbody>
          {
            data.map((car:CarResponse) =>
            <tr key={car._links.self.href}>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.color}</td>
              <td>{car.registrationNumbeer}</td>
              <td>{car.modelYear}</td>
              <td>{car.price}</td>
            </tr>
            )
          }
        </tbody>
      </table>
    )
  }
}

export default CarList;