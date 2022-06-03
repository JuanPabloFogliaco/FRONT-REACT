import { ImagenComponent } from "../ImageComponent/Image";
import {
  ButtonFilter,
  ContentSearch,
  InputSearch,
  WrapperSearch,
  WrapperSubHeader,
} from "./SubHeaderStyle";

const imgFilter = require("../../styleSheets/images/filtros.png");
const imgSearch = require("../../styleSheets/images/buscar.png");

interface Props {
  setOpenFilter?: any;
  openFilter?: any;
  placeholder?: string;
}

export const SubHeader = (props: Props) => {
  return (
    <WrapperSubHeader>
      <WrapperSearch>
        <ContentSearch>
          <ImagenComponent width="17px" height="17px" src={imgSearch} />
          <InputSearch placeholder={props.placeholder} />
        </ContentSearch>
        <ButtonFilter onClick={() => props.setOpenFilter(!props.openFilter)}>
          <ImagenComponent width="17px" height="17px" src={imgFilter} />
        </ButtonFilter>
      </WrapperSearch>
    </WrapperSubHeader>
  );
};

export default SubHeader;
