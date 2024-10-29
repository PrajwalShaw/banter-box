import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext";


const useSignup = ()=>{//custom hook

    const [loading,setLoading] = useState(false);//This loading state is used to track whether the sign-up process is happening 
    //(e.g., showing a loading spinner when the form is submitting).
     const {authUser,setAuthUser} = useAuthContext();

    const signup = async ({fullName,username,password,confirmPassword,gender}) =>{
        const success = handleInputErrors({fullName,username,password,confirmPassword,gender});

        if(!success)
             return;
        
        setLoading(true);//If the inputs are valid, it sets loading to true, indicating the sign-up process has started.
        //Then, it uses the fetch API to send a POST request to the backend server (http://localhost:5000/api/auth/signup). 
        //This sends the user's sign-up data (full name, username, password, etc.) as JSON to the server.
        try{
            const res = await fetch("/api/auth/signup",{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({fullName,username,password,confirmPassword,gender})//sending the data to the db...so it should be in string format...so using stringify

            });

             const data = await res.json();//After the server responds, it processes the response using res.json() to convert it into JavaScript format (i.e., data).
             if(data.error)//this error is coming from the catch(error) block from auth.controller.js....agar signup nahi ho paya toh error dega
             {
                throw new Error(data.error);
             }

             //localStorage
             localStorage.setItem("chat-user",JSON.stringify(data));//This line is used to store user information persistently 
             //in the browser so that the user remains logged in,even after refreshing or reopening the app. It's a 
             //common way to manage authentication state in web applications.
             //The data is converted into a string using JSON.stringify(data) before storing it because localStorage can only 
             //store data as strings, not objects. JSON.stringify() converts the JavaScript object (user data) into a JSON 
             //string.

             //context
              setAuthUser(data);//when we signup we update this state


             console.log(data);
        }catch(error){
           toast.error(error.message);
        }finally{
            setLoading(false);//Whether the request is successful or fails, the finally block will always run, 
            //setting loading back to false to indicate the sign-up process has finished.
        }
    };

    return {loading,signup};//The hook returns two values:
    //loading: A boolean that indicates whether the sign-up process is in progress.
    //signup: The function to call when you want to trigger the sign-up process.
}

export default useSignup;

function handleInputErrors({fullName,username,password,confirmPassword,gender}){

    if(!fullName || !username || !password || !confirmPassword || !gender)
    {
        toast.error("Please fill all the fields");
        return true;
    }
    if(password != confirmPassword)
    {
        toast.error("Passwords do not match");
        return false;
    }
    if(password.length < 6)
    {
        toast.error("Password should not be less than 6 letters");
        return false;
    }

    return true;
}

//This custom hook simplifies the process of handling user sign-ups by encapsulating all the logic 
//(validation, API requests, loading states, and error handling) in one reusable hook.
//Custom hooks allow you to extract and reuse logic across different components, 
//and this one is designed to handle user sign-up functionality.