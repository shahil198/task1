//isme table show krunga

import { useEffect,useState } from "react";
import { makeStyles,Table, TableCell, TableRow , TableBody ,TableHead } from "@material-ui/core";

const useStyle = makeStyles({
    table:{
        width:"90%",
        margin:'50px 0 0 50px'
    },
    thead:{
        '&>*':{
            background:"#000000",
            color:"#FFFFFF",
            fontSize:"20px"
        }
    },
    row:{
        '&>*':{
            fontSize:"20px"
        }
    }

})

const Alldata = () =>{
    const classes = useStyle();
useEffect(()=>{
    all_data();
 },[])
 
 const [users, setUsers] = useState(undefined);


 const url="https://s3.amazonaws.com/open-to-cors/assignment.json";
 async function all_data() {
     const response = await fetch(url);  
     const  data= await response.json();
  
    setUsers(Object.keys(data.products));
    let arr = []
    for(let key in data.products)
    { 
       
        arr.push(data.products[key])
    }

     arr.sort((a,b)=>Number(a.popularity) < Number(b.popularity) && 1 || -1);

    setUsers(arr);
    // // console.log(data);
    //  console.log(arr);
    //  console.log(users)
 }
    return (
  //table return krunga
       <Table className ={classes.table}>
           <TableHead>
              <TableRow  className={classes.thead}>
                  <TableCell>Title</TableCell>
                  <TableCell>Popularity</TableCell>
                  <TableCell>Price</TableCell>
              </TableRow>
           </TableHead>
           <TableBody>
            {
                users?.map((datas,id) => (
                   <TableRow key={id} className={classes.row}>
                       <TableCell>{datas.title}</TableCell>
                       <TableCell>{datas.popularity}</TableCell>
                       <TableCell>{datas.price}</TableCell>
                   </TableRow>
                ))
               
            }
           </TableBody>
       </Table>
    )
}
export default Alldata;