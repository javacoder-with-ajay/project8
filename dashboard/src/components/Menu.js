import { TonalitySharp } from "@mui/icons-material";
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const navigate=useNavigate();
  
  const [user,setUser]=useState("");

  useEffect(()=>{
    const getUser=async ()=>{
      try{
        const res = await axios.get("http://localhost:3002/user");
        setUser(res.data.user);
        navigate("/");
      }catch (e) {
        console.log(e);
      }
    }
    getUser();
  },[])
		
		
	
  return (
    
    <div className="menu-container">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX////2RhrbNCz1OAD6qpvso6DZIhj4RxjvRSXZIBTZNC78z8b2LAD80Mf2OgD4f2nkdnL4e2P4gGnkcW36ppj6oZL1JgD3c1z/+Pb+7OfyWT7XJiDsNgfXAADiamX81M3rmpf1zcxHxpeOAAACbElEQVR4nO2dCU4CQRBFR0YdlMV9RUXvf0k1xqgRhlm6f3UV793gpfr3rwYSqgoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrO+PrTgZqESnC1rC27v7lWCdXNgQH0m8qsWcws/oWD8CS5tBC9UgrN59AkaZVA3QaMjqpug0SUjm+AiegapCe+C1EQmQWoiFeFrggxmEiSDqbDKoPCI2gheqgRZ1bwLUhPeBeNnMLxg9AzOags/pWD0mtiDDFr4URPpYFXLJKh7TfCizyPIJZNMMH5NRBcMn8Hwr4n4GQw+Qb58ySTIqpZMMHxNRL9k9qAmoguGzyCrmnfB8LdoeMHwGaQmsrCUCT7YHNHmUSVoNMNmujoXKupz2ExPJydKRfVB/RScaBW1ffgl+KF4FVTxW1A8Rd1e+iOoVhRN8begWFFTGn8F1deNgWC4LP4XDFYamwRDZXGzYKCDuk1QXP35SmO7YJAstgmGWODaBQNkcZeg+wVut6Dz0ugi6HqB6yboOItdBd2WRndBp1nsI+jyoPYTdLjA9RXUTjHB77z7Czpb4IYIiqc4LovDBB2VxlBBN6UxXNDJAjdG0MVLY5yggyyOFSxecbxg4QtcCsGiF7g0ggUvcKkEi81iOsFCs5hSsMgpphUscIFLLVjcQU0vWFhp5BAUl0Z7FvMIiqfYlsVcgsW8+vMJFpLFnIJFlEZeQfUncAaC5gc1v6BxaSgETUtDI2i4wKkEzbKoEzR69SsFTb620QoaLHBqQfkU9YLqBe5pdazn+UX1X0FVtT4y4fVNZggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI3gHMZFmvm1YbhgAAAAASUVORK5CYII=" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">{user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;