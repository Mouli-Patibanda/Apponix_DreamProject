import Container from "@mui/material/Container"
import { MultiplewaysOfCallingCss } from "../../component/notes/css/MultiplewaysOfCallingCss"

export const Home:React.FC<{}>=()=>{
    return<>
   <Container style={{backgroundColor:'black'}} maxWidth="sm">
    <MultiplewaysOfCallingCss/>
   </Container>
    </>
}