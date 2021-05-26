import React from 'react';
import TextField from '@material-ui/core/TextField';

const Register = ({ handleIncrement, handleDecrement, changeDisplayFormStatus, currentValue, displayForm}) => (
//          <form>
//       <TextField id="filled-basic" label="Filled" variant="filled" onChange = {onChangeUser} />
//     <TextField id="filled-basic" label="Filled" variant="filled" disabled={disableCurrentValue} />
//       <TextField id="filled-basic" label="Filled" variant="filled" required value={firstValueForTextField} />
//            </form>

<div>
        <div>{currentValue}</div>
        <button onClick = {handleIncrement}>+</button>
        <button onClick = {handleDecrement}>-</button>
        <button onClick = {changeDisplayFormStatus}>Change Form Status</button>
        { displayForm &&
        <form>
            <TextField lable="Standart" />
            <TextField lable="Filled" />
            <TextField lable="Outlined" />
            </form>
        }
</div>
 );
export default Register;
