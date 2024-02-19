import Item from "./Item";
import {  SERVICES, PARTNERS, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16 place-items-center">
      <Item Links={SERVICES} title="OUR SERVICES" />
      <Item Links={PARTNERS} title="OUR PARTNERS" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;
