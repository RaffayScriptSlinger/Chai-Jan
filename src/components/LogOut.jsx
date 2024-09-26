import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LogOut() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the token from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');

    // Redirect to login or signup page
    navigate('/SignUp'); // You can redirect to '/Login' or '/SignUp'
  }, [navigate]);

  return null; // No need to render anything
}

export default LogOut;
