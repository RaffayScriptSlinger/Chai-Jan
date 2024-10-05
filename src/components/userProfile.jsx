
import { useState,useEffect } from "react"


useEffect(() => {
    const storedName = localStorage.getItem("userName") || "";
    const storedEmail = localStorage.getItem("userEmail") || "";

    if (storedName) {
      setName(storedName);
    }
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);
function UserProfile(){
    return(
        <div>
            <h1>Profile</h1>
        </div>
    )
}

export default UserProfile