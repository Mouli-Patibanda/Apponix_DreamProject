// export const Myh2:React.FC<{}>=()=>{
//     return <h2>Hello im h2</h2>
// }
interface Props {
    priority: any;
    name: string;
    size:number
  }
  
  export const PrintName: React.FC<Props> = (props) => {
    return (
      <>
        <p style={{ fontWeight: props.priority ? "bold" : "normal", fontSize: props.size? props.size : "2" }}>
          {props.name}Mouli is a good boy
        </p>
      </>
    )
  }
  
//   const PrintName2 = (props: Props) => {
//     return (
//       <div>
//         <p style={{ fontWeight: props.priority ? "bold" : "normal" }}>
//           {props.name}
//         </p>
//       </div>
//     )
//   }