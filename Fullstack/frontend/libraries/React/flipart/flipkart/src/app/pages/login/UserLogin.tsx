import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Container, FilledInput, FormControl, Grid, IconButton, InputAdornment, InputLabel, TextField } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { FirsthookUseState } from '../../component/notes/hooks/useState/FirsthookUseState';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// export default function BoxSx() {
//   return (
//     <Box
//       sx={{
//         width: 300,
//         height: 300,
//         backgroundColor: 'primary.dark',
//         '&:hover': {
//           backgroundColor: 'primary.main',
//           opacity: [0.9, 0.8, 0.7],
//         },
//       }}
//     />
//   );
// }
export const UserLogin:React.FC<{}>=()=>{
 var [userLogin, setUserLogin]=useState('')
 var [userPassword, setUserPassword]=useState('')
 var navigate=useNavigate()
 const handlelogin=()=>{
  console.log(userLogin)
  console.log(userPassword)
  navigate('/home',{state:{userLogin}})

 }

    return    <>
{/* <FirsthookUseState/> */}
<Container>

<Grid
  container  rowSpacing={1}
  direction="column"
  justifyContent="center"
  alignItems="center"

>
<h1>Login</h1>
<Grid item xs={1}>
<TextField
          id="outlined-multiline-flexible"
          label="First name"
          multiline
          onChange={(e)=>{setUserLogin(e.target.value)}}
          maxRows={4}
        ></TextField>
        </Grid>
        <Grid item xs={10}>
        <TextField
          id="outlined-multiline-flexible"
          label="Password"
          type="password"
          maxRows={4}
          onChange={(e)=>{setUserPassword(e.target.value)}}

        ></TextField>
        </Grid>
        <Grid item >
        <Button variant="contained" color="success" onClick={handlelogin}>Login</Button>
</Grid>
</Grid>
</Container>
        
        </>
    
}