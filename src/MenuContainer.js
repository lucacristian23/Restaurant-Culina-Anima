import MenuItem from "./MenuItem";
import MenuList from "./MenuList";

function MenuContainer({ menuType, foodItems }) {
  console.log(foodItems);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid black",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="/model.png"
          alt="Descripge"
          style={{ height: "30%", width: "30%" }}
        />
        <h1 style={{ textAlign: "center" }}>{menuType}</h1>
        <img
          src="/model.png"
          alt="Descripge"
          style={{ height: "30%", width: "30%" }}
        />
      </div>

      <MenuList menuItems={foodItems} />
    </div>
  );
}

export default MenuContainer;
