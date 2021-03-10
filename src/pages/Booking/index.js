import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Main from './../../components/organisms/Main';
function Booking() {
    const { register, handleSubmit,watch,errors } = useForm();
    const[title,setTitle] =useState();
    const[content,setContent] = useState();
    
    function handleBooking(data){
        console.log(data)
    }
    return (
      <Main>
          <form onSubmit={handleSubmit(handleBooking)}>
        <div className="form-group">
            <input name="title" ref={register({required:true})} id="" className="form-control" />
            {errors.title && <span style={{color :'red'}}>Trường này là bắt buộc !</span>}
        </div>
        
        <div className="form-group">
            <select name="select-type" className="form-control form-control-lg" ref={register({required:true})}
            id="" className="form-control">
                <option value="" selected>Choose</option>
                <option value="1">Hello1</option>
                <option value="2">Hello2</option>
                <option value="3">Hello3</option>
            </select>
            {errors.title && <span style={{color :'red'}}>Trường này là bắt buộc !</span>}
        </div>
        <input type="submit" />
      </form>
      </Main>
    );
  }
export default Booking;