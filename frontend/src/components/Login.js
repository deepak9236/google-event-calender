import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogIn } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/calendar');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/url`);
      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="mt-8 space-y-6">
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleLogin}
              onError={() => console.log('Login Failed')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login