import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddProperty from "./Property";
import CreateArea from "./CreateArea";

function App() {
  var [Properties, setProperties] = useState([]);
  function Addproperty(Property) {
    setProperties((preval) => {
      return [...preval, Property];
    });
    console.log(Properties);
  }
  function deleteProperty(id) {
    setProperties((preval) => {
      return preval.filter((property, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={Addproperty} />
      {Properties.map((property, index) => {
        return (
          <AddProperty
            key={index}
            id={index}
            name={property.name}
            description={property.description}
            size={property.size}
            onclicked={deleteProperty}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
