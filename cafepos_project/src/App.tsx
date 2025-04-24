
import { Box } from '@mui/material'
import Button from '@mui/material/Button'


function App() {
  
  return (
    <Box sx={{display : 'flex', backgroundColor : '#0a9351', width : '100%', height : '100%',margin : 0, padding : 2, borderRadius : '10px'}}>
      <Box sx={{width : '30%', height : 600, maxHeight : "100%", backgroundColor : '#fff'}}> 
        출력공간
      </Box>
      <Box>
        <Button>아메리카노</Button><Button>카페라떼</Button>
      </Box>
    </Box>
  )
}

export default App
