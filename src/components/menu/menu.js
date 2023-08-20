import { Menu } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";

const MenuBar = ({ setActiveItem, activeItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    navigate(name);
  };

  const userName = user && user.nameUser ? user.nameUser : "";

  return (
    <Menu inverted size="massive">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="volunteering"
        active={activeItem === "volunteering"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={handleItemClick}
      />
      <Menu.Menu position="right">
        {userName && <Menu.Item icon={"user"} name={user.nameUser} />}
        {userName && (
          <Menu.Item
            name="myVolunteering"
            active={activeItem === "myVolunteering"}
            onClick={handleItemClick}
          />
        )}
        {userName && (
          <Menu.Item
            name="Disconnect"
            onClick={() => dispatch(setUser(null))}
          />
        )}
        {!userName && (
          <Menu.Item
            name="signIn"
            active={activeItem === "signIn"}
            onClick={handleItemClick}
          />
        )}
        {!userName && (
          <Menu.Item
            name="signUp"
            active={activeItem === "signUp"}
            onClick={handleItemClick}
          />
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default MenuBar;
