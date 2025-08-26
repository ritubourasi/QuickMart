import "./Style.css";

const NavBar = ({ filteritem, menulist }) => {
  return (
    <nav>
      {menulist.map((el, index) => {
        return (
          <button key={index} onClick={() => filteritem(el)}>
            {el}
          </button>
        );
      })}
    </nav>
  );
};

export default NavBar;
