import img1 from './../../../assets/images/1.jpg'
import img2 from './../../../assets/images/2.jpg'
import img3 from './../../../assets/images/3.png'
import img4 from './../../../assets/images/4.webp'
import '../css/style.css'
export var myarray=[img1,img2,img3,img4]
export const Props:React.FC<{}>=()=>{
 
 
    return <>
    {/* <h1>Dispalaying the the same image</h1>
    <img src={img1}/>
    <img src={img1}/>
    <img src={img1}/>
    <img src={img1}/>
    <img src={img1}/>

    <h1>Dispalaying different image</h1>
    <img src={img1}></img>
    <img src={img2}></img>
    <img src={img3}></img>
    <img src={img4}></img>
    <h1>example of calling child in parent  this HOC</h1>
    <Myimage img={img1}/>
<h1>Example of array in hoc </h1> */}
{myarray.map((ele)=>{return<Myimage img={ele}/>})}

   </>
}
   const Myimage:React.FC<{img:string}>=(props)=>{
       
        return<><img src={props.img}/></>
    }
