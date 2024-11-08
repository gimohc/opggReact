interface ItemsInfo {
  items: number[];
}
 function getSrcFromItemId(itemId: number): string {
  return (
    "https://ddragon.leagueoflegends.com/cdn/14.20.1/img/item/" +
    itemId +
    ".png"
  );
}
let item = 0;
export function ItemsMapping( { items }: ItemsInfo) {
  return (
    <div className="linear itemsList">
      {items.map((itemId: number) => {
        if (itemId === 0)
          return <div key={"Empty" + item++} className="emptyItem"></div>
        return <img key={"Item" + item++}  className="item" src={getSrcFromItemId(itemId)} />;
      })}
    </div>
  );
}
