import { ListOptions, Option, Text, WrapperFilter } from "./FilterStyle";

export const Filter = () => {
  return (
    <WrapperFilter>
      <ListOptions>
        <Option>
          <Text>Categorie</Text>
          <Text>combo options</Text>
        </Option>
        <Option>
          <Text>Peso</Text>
          <Text>combo kg segun categorias</Text>
        </Option>
        <Option>
          <Text>Precio</Text>
          <Text>min/max</Text>
        </Option>
        <Option>
          <Text>Descuentos</Text>
          <Text>true/false</Text>
        </Option>
      </ListOptions>
    </WrapperFilter>
  );
};

export default Filter;
