export type Mapped = {
  [key: string]: any
};
  
export const idMap = (items: any[], property = 'id', valProp: any = null): Mapped => {
  const map = {};
  items?.forEach(item => {
    map[item[property]] = valProp ? item[valProp] : item;
  });
  return map;
};
