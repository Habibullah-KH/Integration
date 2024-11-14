import { useContext } from "react";
import { AuthContext } from "../component/Authprovide";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({childeren}) => {

const {user, loading} = useContext(AuthContext)

if(loading){
    return <span className="loading loading-spinner loading-lg"></span>

}
if(user){
    return childeren;
}

    return (
        <>
            <Navigate to="/login"></Navigate>
        </>
    );
};

export default PrivetRoute;