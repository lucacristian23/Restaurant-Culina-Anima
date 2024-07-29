// import Map from "./Map";

import ContactElement from "./ContactElement";
import Map from "./Map";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap", // Optional: if you want the elements to wrap to the next line if they exceed the container width
        }}
      >
        <img
          src="/model.png"
          alt="Descripge"
          style={{ height: "30%", width: "30%" }}
        />
        <img
          src="/model.png"
          alt="Descripge"
          style={{ height: "30%", width: "30%" }}
        />
        <img
          src="/model.png"
          alt="Descripge"
          style={{ height: "30%", width: "30%" }}
        />
        <ContactElement
          imagePath={"/locationicon.png"}
          title={"Adresă"}
          mainContent={"Strada Brasov Nr. 16"}
          secondContent={"Bloc 3S14 SECTOR 6"}
          backgroundColor={"white"}
        />
        <ContactElement
          imagePath={"/phonenumbericon.png"}
          title={"Număr de telefon"}
          mainContent={"0 730 440 033"}
          secondContent={""}
          backgroundColor={"red"}
        />
        <img
          src="/model.png"
          alt="Descripge"
          style={{ height: "30%", width: "30%" }}
        />
        <img
          src="/model.png"
          alt="Descripge"
          style={{ height: "30%", width: "30%" }}
        />
        <img
          src="/model.png"
          alt="Descripge"
          style={{ height: "30%", width: "30%" }}
        />
        <ContactElement
          imagePath={"/mailicon.png"}
          title={"E-mail"}
          mainContent={"Strada Brasov Nr. 16"}
          secondContent={""}
          backgroundColor={"red"}
        />
        <ContactElement
          imagePath={"/facebookicon.png"}
          title={"Facebook"}
          mainContent={"Culina Cu Anima"}
          secondContent={""}
          backgroundColor={"white"}
        />
      </div>
      <Map />
    </div>
  );
}

export default Contact;
