import { signIn } from '../../Helpers/firebaseAuth.js'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

interface FirebaseUser {
  uid:string;
  email:string;
}


function Login() {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    email:'',
    password:'',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
   e.preventDefault(); 
  }
const handleSignIn = () => {
  signIn(formData.email, formData.password)
    .then((user:FirebaseUser | undefined) => {
      console.log("User signed in:", user);
      navigate('/admin/dashboard');
    })
    .catch((error: { code: string; message: string }) => {
      console.error("Sign-in failed:", error);
    });
};
  return (
    <>
    <form onClick={handleSubmit}>
    <div className="login_container">
      <div className="login_form_wrapper">
        <label>Admin Login</label>
      <input placeholder="Enter Email Address" type="email" name="email" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" required value={formData.email} onChange={handleChange}/>
      <input placeholder="Enter Password" type="password" name="password" required value={formData.password} onChange={handleChange}/>
      <input type="submit" className="button_light" value="submit" onClick={handleSignIn}/>
      </div>
    </div>
</form>
</>
  )
}

export default Login
