import Dialog from "@mui/material/Dialog";
import { DialogActions } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addCar } from "../api/carapi";

function AddCar() {
  const [ open,setOpen ] = useState(false);
  const [ car , setCar ] = useState<Car>({
    brand : '',
    model : '',
    color : '',
    registrationNumber : '',
    modelYear : 0,
    price : 0
  });
  const queryClient = useQueryClient();
  const { mutate } = useMutation(addCar,{
    onSuccess : () => {
      queryClient.invalidateQueries(["cars"]);
    },
    onError : (err) => {
      console.log(err);
    },
  })
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setCar({...car,[event.target.name] : event.target.value})
  }

  const handleSave = () => {
    mutate(car);
    setCar({brand: '',model:'',color:'',registrationNumber:'',modelYear:0,price:0});
    handleClose();
  }
  return(
    <>
      <button onClick={handleClickOpen}>New 차량 추가</button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          New Car <br /><br />
          <input placeholder="Brand" name="brand" value={car.brand} onChange={handleChange} /><br />
          <input placeholder="Model" name="model" value={car.model} onChange={handleChange} /><br />
          <input placeholder="Color" name="color" value={car.color} onChange={handleChange} /><br />
          <input placeholder="ModelYear" name="modelYear" value={car.modelYear} onChange={handleChange} /><br />
          <input placeholder="Reg.nr" name="registrationNumber" value={car.registrationNumber} onChange={handleChange} /><br />
          <input placeholder="Price" name="price" value={car.price} onChange={handleChange} /><br />
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>취소</button>
          <button onClick={handleSave}>저장</button>
        </DialogActions>
      </Dialog>

    </>
  )
}

export default AddCar;