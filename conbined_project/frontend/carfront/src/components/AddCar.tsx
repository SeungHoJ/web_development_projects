import Dialog from "@mui/material/Dialog";
import { DialogActions } from "@mui/material";
// import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addCar } from "../api/carapi";
import CarDialogContent from "./CarDialogCountent";
import { Car } from "../types";

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
        <DialogTitle>New Car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange} />
        <DialogActions>
          <button onClick={handleClose}>취소</button>
          <button onClick={handleSave}>저장</button>
        </DialogActions>
      </Dialog>

    </>
  )
}

export default AddCar;