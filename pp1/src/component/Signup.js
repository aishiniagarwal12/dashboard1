import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../commo/Signup.css';

 export const Signup=()=>{
    const navigate= useNavigate();
    
    const handlesubmit=(e)=>{
        e.preventDefault();
        alert("signup successful");
        navigate('/login');
        
    };
    return(
        <div className='main'>      
        <h3>Signup form</h3>
        <form onSubmit={handlesubmit}>
        <div classname="form-group">
            <label htmlfor="fname">Firstname</label><br></br>
            <input type="text" id="fname" name="Firstname"placeholder="your first name" required/></div><br></br>
            <div classname="form-group">
           <label htmlfor="lname">Lastname</label><br></br>
           <input type="text" id="lname" name="Lastname" placeholder="your last name"required /></div><br></br>
           <div classname="form-group">
           <label htmlfor="email">Email</label><br></br>
           <input type="email" id="email" name="Email" placeholder="YOUR EMAIL"required/></div><br></br>
           <div classname="form-group">
           <label htmlfor="password">Password</label><br></br>
           <input type="password" id="passsowrd" name="Password" placeholder="your password"required/></div><br></br>
           <div classname="form-group">
           <label htmlfor="password">Confirm password</label><br></br>
           <input type="password" id="passsowrd" name="Password" placeholder="your password"required/></div><br></br>
           <div classname="form-group">
            <label htmlfor="select">Select your gender</label><br></br>
            <input type="radio"value="male" name="gender" id="select"/>male<br></br>
            <input type="radio" value="female" name="gender" id="select"/>female</div><br></br>
           <div classname="form-group">
            <label htmlfor="date">Please tell your date</label><br></br>
            <input type="date" name="date" id="date" required/></div><br></br>
           <div classname="form-group">
            <p>Select your country</p>
            <select name="country"id="country">
            <option value="INDIA">INDIA</option>
            <option value="SRI LANKA">SRI LANKA</option>
            <option value="AUSTRIA">AUSTRIA</option>
            <option value="BRAZIL">BRAZIL</option>
            <option value="RUSSIA">RUSSIA</option>
            <option value="JAPAN">JAPAN</option>
            <option value="MEXICO">MEXICO</option>
            </select></div><br></br>
            <button type="submit">Signup</button><br></br>
            <div classname="login">
                <p>Already have an account?</p>
                <button type="submit">Login</button>
            </div>
          </form>
        </div>
    );

};
