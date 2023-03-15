import  './style.css'
import { thirdstyle } from './style'
import { StyledComponent } from './StyledComponent'

export const MultiplewaysOfCallingCss:React.FC<{}>=()=>{
    const fourthstyle={width:"200px", height:"200px", background:"green"}
    return <>
    <div style={{width:"200px", height:"200px", background:"red"}}>First Way of CSS</div>
    <div id="secondway">Second way of CSS external using css</div>
    <div style={thirdstyle}>Third way of CSS external using ts</div>
    <div style={fourthstyle}>Fourth way of css</div>
    <StyledComponent/>
    </>
}