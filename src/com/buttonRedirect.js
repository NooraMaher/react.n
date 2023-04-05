import { useNavigate } from "react-router-dom";

const ButtonRedirect = (p) => {
    const navigate=  useNavigate()
    console.log(p.p,p.t)
    return (
        <div>
            <button className={ p. value.test} onClick={() => {navigate('/Test')}}>{p}</button>
        </div>
    )
}
export default  ButtonRedirect;
