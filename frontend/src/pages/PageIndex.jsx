import React, { useEffect, useState } from "react";
import { decryptData } from "./utils/LoginEncryption";
import JavaSecurity from "../assets/Java_Security.jpg";

function LoginPage() {
  const [userData, setUserData] = useState({ id: '', name: '', email: '' });

  useEffect(() => {
    const storageData = localStorage.getItem('userData');
    
    if (storageData) {
      const dataEncoded = decryptData(storageData);
      
      if (dataEncoded) {
        try {
          const decryptedData = typeof dataEncoded === 'string' ? JSON.parse(dataEncoded) : dataEncoded;
          const { id, name, email } = decryptedData;
          setUserData({ id, name, email });
        } catch (error) {
          console.error("Error in PageIndex:", error);
        }
      }
    }
    
  }, []);

  return (
      <div style={styles.container}>
        <div style={styles.content}>
          <h1>Login Page</h1>
          <img src={JavaSecurity} alt="Java Security" style={{ width: '20rem', height: '50vh' }} />
          <h4>Java Security</h4>
          
          <p>ID: {userData.id || 'N/A'}</p>
          <p>Name: {userData.name || 'N/A'}</p>
          <p>Email: {userData.email || 'N/A'}</p>
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full viewport height
      width: '100vw',  // Full viewport width
      backgroundColor: '#f0f0f0' // Optional: Background color for better visibility
    },
    content: {
      textAlign: 'center'
    }
  };

export default LoginPage;
