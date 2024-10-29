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
export function ItemsMapping({ items }: ItemsInfo) {
  return (
    <div className="linear itemsList">
      {items.map((itemId: number, i : number) => {
        if (itemId === 0)
          return (
            <img
              key={itemId + i}
              alt="empty"
              className="item"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVCIi2W4mVSDTGzkpeQJ5gMl86tEFZUk6Wg&s"
            />
          );
        return <img key={"Empty" + i} className="item" src={getSrcFromItemId(itemId)} />;
      })}
    </div>
  );
}
