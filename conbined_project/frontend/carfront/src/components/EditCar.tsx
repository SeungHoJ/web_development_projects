import { useState } from "react";
import { Car, CarEntry, CarResponse } from "../types";
import { Button, Dialog, DialogActions, DialogTitle, IconButton, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CarDialogContent from "./CarDialogCountent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCar } from "../api/carapi";

type FormProps = {
  cardata : CarResponse
}

function EditCar({cardata}: FormProps){
  const [car , setCar] = useState<Car>({
    brand : '',
    model : '',
    color : '',
    registrationNumber : '',
    modelYear : 0,
    price : 0
  });
  const queryClient = useQueryClient();
  const {mutate} = useMutation(updateCar,{
    onSuccess : () => {
      queryClient.invalidateQueries(["cars"])
    },
    onError : (err) => {
      console.log(err);
    }
  });

  const handleClickOpen = () => {
    setCar({
      brand : cardata.brand,
      model : cardata.model,
      color : cardata.color,
      registrationNumber : cardata.registrationNumber,
      modelYear : cardata.modelYear,
      price : cardata.price,
    })
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    const url = cardata._links.self.href;
    const carEntry : CarEntry = {car,url}
    mutate(carEntry);
    setCar({
      brand : '',
      model : '',
      color : '',
      registrationNumber : '',
      modelYear : 0,
      price : 0,
    })
    setOpen(false);
  }

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setCar({...car, [event.target.name] : event.target.value});
  }
  const [open , setOpen] = useState(false);

  return(
    <>
       {/* <Button onClick={handleClickOpen}>차량 정보 수정

       </Button> */}
      <Tooltip title="Edit car">
        <IconButton aria-label="edit" size="small" onClick={handleClickOpen}>
          <EditIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleSave}>저장</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default EditCar;