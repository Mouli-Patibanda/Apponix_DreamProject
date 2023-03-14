import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { FirsthookUseState } from '../../component/notes/hooks/FirsthookUseState';
import { useState } from 'react';

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
 const handlelogin=()=>{
  console.log(userLogin)
  console.log(userPassword)
 }

    return    <>
<FirsthookUseState/>
<h1>Login</h1>

<TextField
          id="outlined-multiline-flexible"
          label="First name"
          multiline
          onChange={(e)=>{setUserLogin(e.target.value)}}
          maxRows={4}
        ></TextField>
        <TextField
          id="outlined-multiline-flexible"
          label="Password"
          type="password"
          maxRows={4}
          onChange={(e)=>{setUserLogin(e.target.value)}}

        ></TextField>
        <Button variant="contained" color="success" onClick={handlelogin}>
  Login
</Button>
          
        
        </>
    
}