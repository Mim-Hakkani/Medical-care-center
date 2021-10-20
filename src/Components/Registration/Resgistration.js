import React from 'react';
import { Form,Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../context/useAuth';


const Login = () => {
    const {signUpuser}=useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => signUpuser(data.email,data.password,data.name);
    return (
        <div className="w-50 border border-1 border-muted p-5 d-block m-auto">

            <div className="authentication-site">
                <h1 className="py-2 text-center ">Create An Account</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Enter Name" defaultValue="" {...register("name")} />

                <input type="email" placeholder="Enter Email" defaultValue="" {...register("email")} />
      
                <input type="password" placeholder="Enter Password" {...register("password", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}
      
                <input type="submit" />
               </form>

                    
                   {/* react router is used this  */}
                   
                    <Button variant="primary" type="submit" className="float-end">
                       Submit
                   </Button>
                
            </div>
            
        
            
          
        </div>
    );
};

export default Login;