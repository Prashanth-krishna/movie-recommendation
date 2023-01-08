import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import "./header.css";
function Header() {
  return (
    <div className="header_main">
      <div className="account_icon">
        <HomeIcon style={{ fill: "rgb(125, 44, 199)" }} />
      </div>
      <div className="header_appname">
        <span>Recommendation</span>
      </div>
      <div className="search_icon">
        <SearchIcon style={{ fill: "rgb(125, 44, 199)" }} />
      </div>
    </div>
  );
}
export default Header;
