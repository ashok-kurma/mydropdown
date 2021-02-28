import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function valuetext(value) {
  valuetext1(value);
  return `${value}°C`;
}

function valuetext1(value){
  let rows = [];
  for (let i = 0; i < value; i++) {
    rows.push(<Showmodulefields key={i}/>)
  }
  return rows;
}

const a = '10dfgdfgdhfgbdiygdiugdigsdiugsdigsiysdgsifgsdifugsfiusgfsdifgsdiyfgsdfiysdgfsdiufgxdbiyfsdgfdsiuf';
const Showmodulefields = () => <div><Input placeholder="Input Module" inputProps={{ 'aria-label': 'description' }} /></div>;



export default function App() {

  var mvalue;
  let rows = [];
  const classes = useStyles();
  const [state, setState] = React.useState({
    device: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    if (event.target.value === ''){
    document.getElementById('sensorinputs').style.contentVisibility= 'hidden';
    document.getElementById('motorinputs').style.contentVisibility= 'hidden';
    document.getElementById('relayinputs').style.contentVisibility= 'hidden';
    } else{
      if (event.target.value === 's'){
      document.getElementById('sensorinputs').style.contentVisibility= 'visible';
      document.getElementById('motorinputs').style.contentVisibility= 'hidden';
      document.getElementById('relayinputs').style.contentVisibility= 'hidden';
    }
    if (event.target.value === 'm'){
      document.getElementById('sensorinputs').style.contentVisibility= 'hidden';
      document.getElementById('motorinputs').style.contentVisibility= 'visible';
      document.getElementById('relayinputs').style.contentVisibility= 'hidden';
    }
    if (event.target.value === 'r'){
      document.getElementById('sensorinputs').style.contentVisibility= 'hidden';
      document.getElementById('motorinputs').style.contentVisibility= 'hidden';
      document.getElementById('relayinputs').style.contentVisibility= 'visible';
    }
    }
    setState({
      ...state,
      [name]: event.target.value,
    });
  };


  const handleChangemodules = (event) =>{
    mvalue = event.target.value;
          hello(mvalue);
  };

  function hello(mvalue){
      for (let i = 0; i < mvalue; i++) {
        rows.push(<ol><Showmodulefields key={i}/></ol>)
      }
      return rows;
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

  return (

    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexFlow: "column"}}>
    <div style={{display: "flex", justifyContent: "center", marginTop: "200px"}}>
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-choose-a-device-native-simple">Choose a device</InputLabel>
        <Select
          native
          onChange={handleChange}
          label="choose a device"
          inputProps={{
            name: 'device',
            id: 'outlined-choose-a-device-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={'s'}>Sensor</option>
          <option value={'m'}>Motor</option>
          <option value={'r'}>Relay</option>
        </Select>
      </FormControl>
      </div>
      <div id='sensorinputs' style={{display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center", contentVisibility: "hidden"}}>
      <TextField id="sensorid" label="Sensor Id" style={{width: "300px", marginTop: 50, marginBottom: 20}}/>
      <TextField id="sensorname" label="Sensor Name" style={{width: "300px"}}/>
      </div>

      <div id='motorinputs' style={{display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center", contentVisibility: "hidden"}}>
      <TextField id="motorid" label="Motor Id" style={{width: "300px", marginTop: 50, marginBottom: 20}}/>
      <TextField id="motorname" label="Motor Name" style={{width: "300px"}}/>
      </div>

      <div id='relayinputs' style={{display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center", contentVisibility: "hidden"}}>
      <TextField id="relayid" label="Relay Id" style={{width: "300px", marginTop: 50, marginBottom: 20}}/>
      <TextField id="relayname" label="Relay Name" style={{width: "300px"}}/>

<br/>
<br/>
      <Typography id="modules" gutterBottom>
        Select Modules from 0 to 32 ( default 10 input fields showing )
      </Typography>
      {/* <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="modules"
        step={1}
        marks
        min={0}
        max={32}
        valueLabelDisplay="auto"
      /> */}
       <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-choose-a-module-native-simple">Choose 1 to 32 modules</InputLabel>
        <Select
          native
          onChange={handleChangemodules}
          label="choose 1 to 32 modules"
          inputProps={{
            name: 'module',
            id: 'outlined-choose-a-module-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>1 Module</option>
          <option value={2}>2 Modules</option>
          <option value={3}>3 Modules</option>
          <option value={4}>4 Modules</option>
          <option value={5}>5 Modules</option>
          <option value={6}>6 Modules</option>
          <option value={7}>7 Modules</option>
          <option value={8}>8 Modules</option>
          <option value={9}>9 Modules</option>
          <option value={10}>10 Modules</option>
          <option value={11}>11 Modules</option>
          <option value={12}>12 Modules</option>
          <option value={13}>13 Modules</option>
          <option value={14}>14 Modules</option>
          <option value={15}>15 Modules</option>
          <option value={16}>16 Modules</option>
          <option value={17}>17 Modules</option>
          <option value={18}>18 Modules</option>
          <option value={19}>19 Modules</option>
          <option value={20}>20 Modules</option>
          <option value={21}>21 Modules</option>
          <option value={22}>22 Modules</option>
          <option value={23}>23 Modules</option>
          <option value={24}>24 Modules</option>
          <option value={25}>25 Modules</option>
          <option value={26}>26 Modules</option>
          <option value={27}>27 Modules</option>
          <option value={28}>28 Modules</option>
          <option value={29}>29 Modules</option>
          <option value={30}>30 Modules</option>
          <option value={31}>31 Modules</option>
          <option value={32}>32 Modules</option>

        </Select>
      </FormControl>


      {  function() {
        for (let i = 0; i < 10; i++) {
            rows.push(<ol key={i}><Showmodulefields key={i}/></ol>) 
        }
        return rows;
      }()}

      </div>
    </div>
  );
}







