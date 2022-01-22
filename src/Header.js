import "./Header.css"
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMore from "@mui/icons-material/ExpandMore";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {useHistory} from "react-router-dom";

function Header(){
    const history=useHistory()
    return(
        <div className="header">
        <Link to ="/">
            <img className="header_img" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt=""/>
        </Link>
        <div className="header_center">
            <input type="text" placeholder="Search Rooms"/>
           <SearchIcon/>
        </div>
        <div className="header_right">
            <p> Become a Host</p>
            <IconButton>
            <LanguageIcon /> </IconButton>
            <IconButton><ExpandMore/></IconButton>
            <div>
            <IconButton onClick={()=>history.push("/login")}><Avatar/></IconButton>
            </div>
        
        </div>
        </div>
    )
}
export default Header;