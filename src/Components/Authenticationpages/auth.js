import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// get token generated on login
const token = cookies.get("TOKEN");

export default function AuthComponent() {
  // set an initial state for the message we will receive after the API call
  const [message, setMessage] = useState("");

  // useEffect automatically executes once the page is fully loaded
  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "http://localhost:4000/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  // logout
  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    window.location.href = "/login";
  }
 
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <div>
      <h1 className="text-center">Welcome to the voting application</h1>
      
        <p className="text-center">To vote for  your preferred candidate click on the toggle button</p>
      {/* logout */}
      <Button className="text-center" type="submit" variant="danger" onClick={() => logout()}>
        Logout
      </Button>
      
    </div>
  );
}