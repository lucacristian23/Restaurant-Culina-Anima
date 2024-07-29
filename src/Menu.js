import { Route, Routes } from "react-router-dom";
import MenuNavigation from "./MenuNavigation";
import MenuContainer from "./MenuContainer";

function Menu() {
  const aperitive = [
    {
      itemName: "Bruschette",
      description:
        "Pâine prăjită cu roșii, usturoi, busuioc și ulei de măsline",
      foodImage: "/bruschete.jpg",
      price: 20,
      isFavorite: false,
    },
    {
      itemName: "Ciuperci Umplute",
      description: "Ciuperci umplute cu brânză, usturoi și ierburi",
      foodImage: "/ciuperciumplute.jpg",
      price: 25,
      isFavorite: false,
    },
    {
      itemName: "Platou de Mezeluri",
      description: "Selecție de mezeluri italiene și brânzeturi",
      foodImage: "/platoudemezeluri.jpg",
      price: 35,
      isFavorite: false,
    },
  ];

  const supe = [
    {
      itemName: "Supa de Legume",
      description:
        "Supa din legume proaspete: morcovi, cartofi, țelină și roșii",
      foodImage: "/supadelegume.webp",
      price: 15,
      isFavorite: false,
    },
    {
      itemName: "Supa de Pui",
      description: "Supa de pui cu tăiței de casă și legume",
      foodImage: "/supadepui.jpg",
      price: 18,
      isFavorite: false,
    },
    {
      itemName: "Supa de Rosii",
      description: "Supa cremă de roșii cu busuioc și crutoane",
      foodImage: "/supaderosii.jpg",
      price: 16,
      isFavorite: false,
    },
  ];

  const salate = [
    {
      itemName: "Salata Caesar",
      description:
        "Salata Caesar originală cu pui, crutoane și dressing Caesar",
      foodImage: "https://bit.ly/2GJFu5W",
      price: 22,
      isFavorite: false,
    },
    {
      itemName: "Salata Greceasca",
      description:
        "Salata grecească cu roșii, castraveți, ceapă, măsline și feta",
      foodImage: "/salatagreceasca.jpg",
      price: 20,
      isFavorite: false,
    },
    {
      itemName: "Salata de Ton",
      description: "Salată mixtă cu ton, porumb, măsline și ceapă roșie",
      foodImage: "/salatadeton.jpg",
      price: 24,
      isFavorite: false,
    },
  ];

  const feluriPrincipale = [
    {
      itemName: "Friptura de Vita",
      description: "Friptură de vită cu cartofi copți și legume la grătar",
      foodImage: "/fripturadevita.webp",
      price: 45,
      isFavorite: false,
    },
    {
      itemName: "Pui la Cuptor",
      description: "Pui la cuptor cu cartofi și morcovi caramelizați",
      foodImage: "/fripturadepui.jpeg",
      price: 38,
      isFavorite: false,
    },
    {
      itemName: "Somon la Gratar",
      description: "Somon la grătar cu sparanghel și sos de lămâie",
      foodImage: "/somonlagratar.jpg",
      price: 42,
      isFavorite: false,
    },
  ];

  const garnituri = [
    {
      itemName: "Cartofi Prajiti",
      description: "Cartofi prăjiți crocanți",
      foodImage: "/cartofiprajiti.jpg",
      price: 12,
      isFavorite: false,
    },
    {
      itemName: "Legume la Gratar",
      description: "Legume la grătar cu ulei de măsline și ierburi",
      foodImage: "/legumelagratar.jpg",
      price: 15,
      isFavorite: false,
    },
    {
      itemName: "Orez cu Legume",
      description: "Orez cu legume proaspete și sos de soia",
      foodImage: "/orezculegume.webp",
      price: 14,
      isFavorite: false,
    },
  ];

  const bauturi = [
    {
      itemName: "Suc de Portocale",
      description: "Suc proaspăt de portocale",
      foodImage: "/sucdeportocale.jpg",
      price: 10,
      isFavorite: false,
    },
    {
      itemName: "Cafea",
      description: "Cafea proaspăt măcinată și preparată",
      foodImage: "/cafea.webp",
      price: 8,
      isFavorite: false,
    },
    {
      itemName: "Ceai Verde",
      description: "Ceai verde organic cu miere și lămâie",
      foodImage: "/ceaiverde.jpg",
      price: 12,
      isFavorite: false,
    },
  ];

  return (
    <div>
      <MenuNavigation />

      <Routes>
        <Route
          path="/appetizers"
          element={
            <MenuContainer menuType={"Aperitive"} foodItems={aperitive} />
          }
        />
        <Route
          path="/soups"
          element={<MenuContainer menuType={"Supe"} foodItems={supe} />}
        />
        <Route
          path="/salads"
          element={<MenuContainer menuType={"Salate"} foodItems={salate} />}
        />
        <Route
          path="/main-courses"
          element={
            <MenuContainer
              menuType={"Feluri Principale"}
              foodItems={feluriPrincipale}
            />
          }
        />
        <Route
          path="/sides"
          element={
            <MenuContainer menuType={"Garnituri"} foodItems={garnituri} />
          }
        />
        <Route
          path="/drinks"
          element={<MenuContainer menuType={"Bauturi"} foodItems={bauturi} />}
        />
      </Routes>
    </div>
  );
}

export default Menu;
