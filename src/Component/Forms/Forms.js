
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import'./Forms.css';
import { UserContext } from '../../App';
import { Link, useParams } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
   KeyboardDatePicker,
} from '@material-ui/pickers';
import { set } from 'date-fns';




const Forms = () => {
    const {btn} = useParams();  
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userInfo,setUserInfo] =useState();

    const [selectedDate, setSelectedDate] = useState({
      checkIn:new Date()
      
      });

      const handleCheckInDate = (date) => {
        const newDates ={...selectedDate};
        newDates.checkIn = date;
      setSelectedDate(newDates);
    };


    const onSubmit = data => {
        // console.log('forms submitted', data)
        // setUserInfo(data)
   
      };
      const handleEvents =() => {
        const newEvent ={...loggedInUser,...selectedDate,btn}
        fetch('https://vast-brook-72942.herokuapp.com/addEvent',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(newEvent)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })


}



    return (
        <form className="event-form" onSubmit={handleSubmit(onSubmit)} style={{}}> 
        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
        {errors.name && <span className="error">Name is required</span>}
     <br/>
        <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  placeholder="Your Email"/>
        {errors.email && <span className="error">Email is required</span>}
    <br/>
       <MuiPickersUtilsProvider utils={DateFnsUtils} className="mar">
      <Grid container justify="space-around">
        <KeyboardDatePicker
         margin="normal"
         id="date-picker-dialog"
         label="sellect your Date"
         format="dd/MM/yyyy"
          value={selectedDate.checkIn}
          onChange={handleCheckInDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
           </Grid>
        </MuiPickersUtilsProvider>
     <br/>  
        <input name="description" ref={register({ required: true })}  placeholder="Description" />
        {errors.description && <span className="error">Description is required</span>}
        <br/>
        <input name="event" ref={register({ required: true })}  placeholder={btn}  value={btn}/>
        {errors.event && <span className="error">Event name is required</span>}
        <br/>
        <Link to="/selectedEvent"><input type="submit"   onClick={handleEvents}   /> </Link>
      
        
      </form>
    );
};

export default Forms;