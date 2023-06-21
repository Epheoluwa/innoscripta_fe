import AuthContext from 'Context/AuthProvider';
import apiClient from "./api";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
    const { setAuth } = useContext(AuthContext)
    const navigate = useNavigate();
    const logout = () => {

        try {
            apiClient.post('/api/logout')
                .then(response => {
                    // console.log(response.data.data);
                    if (response.data.data === 'success') {
                        setAuth({})
                        sessionStorage.removeItem('token', response.data.data.token);
                        navigate('/login');
                    }

                })
                .catch(error => {

                });
        } catch (err) {
            console.log(err)
        }
    }
    return logout;
}

export default useLogout