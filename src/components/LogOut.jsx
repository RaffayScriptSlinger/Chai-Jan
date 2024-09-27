import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LogOut() {
  const navigate = useNavigate();

  useEffect(() => {
    
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');

  
    navigate('/SignUp'); 
  }, [navigate]);

  return null; 
}

export default LogOut;
