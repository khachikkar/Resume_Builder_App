import MHeader from "../../components/header";
import {Button} from "antd";
import {Link} from "react-router-dom";
import {ROUTE_CONSTANTS} from "../../utils/constants/constants";
import {useContext} from "react";
import {ResumeContext} from "../../context";


const MainPage = () => {

    const {isAuth} = useContext(ResumeContext)

 console.log(isAuth, "TT");


    return (
        <div>
            <Link to="/main/builder">
                <Button>
                    Start to Build
                </Button>
            </Link>

        </div>
    )
}

export default MainPage