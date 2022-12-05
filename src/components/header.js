import SearchIcon from "@mui/icons-material/Search";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./header.css";
function Header() {
  return (
    <div className="header_main">
      <div className="account_icon">
        <AccountCircleRoundedIcon style={{ fill: "black" }} />
      </div>
      <div className="header_appname">
        <span>Recommendation</span>
      </div>
      <div className="search_icon">
        <SearchIcon />
      </div>
    </div>
  );
}
export default Header;
