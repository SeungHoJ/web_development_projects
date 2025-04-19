import { Box, Typography, Button } from "@mui/material";
import LoadingImage from "../assets/loading.png"


const ResultBox = ({loading, resultVisible, field, time, onModalOpen, onShare }) => {

  const calculatedDays = time ? Math.ceil(10000 / Number(time)) : 0 ;

  return(
    <>
      {loading && (
        <Box sx={{display : 'flex', justifyContent : 'center', mb : 8}}>
          <img src={LoadingImage} alt="Loading" style={{
            animation : 'rotate 1.1s infinite liner',
            width : 100,
          }} />
        </Box>
      )}

      {resultVisible && (
        <Box sx={{display : 'flex', flexDirection : 'column', alignItems : 'center', lineHeight : '1.5', mb : 8}}>
          <Typography sx={{fontSize : 20}}>당신은 <span style={{fontSize : 70}}>{field}</span> 전문가가 되기 위해서</Typography>
          <Typography sx={{fontSize : 20}}>대략 <span style={{fontSize : 70}}>{calculatedDays}</span>일 이상 훈련하셔야 합니다 !!</Typography>
          <Box sx={{display : 'flex', justifyContent : 'center', mt : 7}}>
            <Button variant="contained" onClick={onModalOpen} sx={{backgroundColor : '#fcee21', color : '#5b2386'}}>훈련하러 가기 
            </Button>
            <Button variant="outlined" onClick={onShare} sx={{backgroundColor : '#fff', color : '#5b2386'}}>
            Share
            </Button>
          </Box>
        </Box>
      )}
    </>
  )
}

export default ResultBox;