import Alldata  from "./Components/Alldata";
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles ({
  heading:{
    alignItems:"center",
    marginLeft:"40%"
  }
})
function App() {
  const classes=useStyle();
  return (
    <>
     <h1 className={classes.heading}>Data from json file</h1>
    <Alldata />
    </>
   
  );
}

export default App;
