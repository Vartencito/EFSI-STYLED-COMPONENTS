import React from "react";
import { string } from "prop-types";
import { Container, Name, Category, Description, Image } from "./styles";

function Producto({ nombre, categoria, descripcion }) {
  return (
    <Container>
      <Image src="https://i.pinimg.com/originals/ff/f0/e7/fff0e76fb2c6ea822c7c8631f1e1c24e.png" />
      <Name>{nombre}</Name>
      <Category color='#2F95F0'>{categoria}</Category>
      <h3>holaaaa</h3>
      <Category>{categoria}</Category>
      <Description>{descripcion}</Description>
    </Container>
  );
}

Producto.propTypes = {
  nombre: string.isRequired,
  categoria: string.isRequired,
  descripcion: string.isRequired,
};

export default Producto;
