import {Button} from "antd";
import {Link} from "react-router-dom";



const MainPage = () => {



    return (
        <div>
            <Link to="/main/builder">
                <Button>
                    Start to Build
                </Button>
            </Link>

<Link to="/main/builder/resume">
    <Button>
        My Resume
    </Button>
</Link>


        </div>
    )
}

export default MainPage