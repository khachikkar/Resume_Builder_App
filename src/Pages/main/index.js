import {Button} from "antd";
import {Link} from "react-router-dom";
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