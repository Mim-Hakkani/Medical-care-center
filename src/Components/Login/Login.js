import React from 'react';
import { ButtonGroup, Form,Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const Login = () => {
    const {signInUsingGoogle,signInUser}=useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => signInUser(data.email,data.password);
    const location=useLocation()
    const history=useHistory()
    const redirect_uri=location.state?.from || '/home'

    const handleGoogleSignIn=()=>{
        signInUsingGoogle()
        .then((result) => {
            history.push(redirect_uri) 
        })
    }
    return (
        <div className="w-50 border border-1 border-muted p-5 d-block m-auto my-5">

            <div className="authentication-site">
                <h1 className="py-2 text-center ">Sign In</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
      
                <input type="email" defaultValue="" {...register("email")} 
                placeholder="Enter Email"
                className="w-100 my-2 py-2 border border-muted"
                
                
                /><br/>
      
                <input type="password" {...register("password", { required: true })} 
                placeholder="Enter Password"
                className="w-100 my-2 py-2 border border-muted"
                /><br/>

                {errors.exampleRequired && <span>This field is required</span>}
                        
                <Link to="/registration" className="float-start text-info">Create an account </Link>

                <Button onClick={handleGoogleSignIn} variant="primary" type="submit" className="float-end">
                  Submit
                </Button>
               
               </form>

                    
 
                
            </div>
            
            <div  className="pt-5 m-auto text-center mt-5">
                <h4>Sign in With Another Account </h4>
                <button onClick={handleGoogleSignIn} className ="btn btn-primary"><i className="fab fa-google"></i> Google Sign in</button>
                {/* <button className ="btn btn-primary m-2">GitHub Sign in</button> */}
             </div>
            
          
        </div>
    );
};

export default Login;