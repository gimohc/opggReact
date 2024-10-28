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
    <td className="linear itemsList">
      {items.map((itemId: number) => {
        if (itemId === 0)
          return (
            <img
              alt="empty"
              className="item"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVCIi2W4mVSDTGzkpeQJ5gMl86tEFZUk6Wg&s"
            />
          );
        return <img className="item" src={getSrcFromItemId(itemId)} />;
      })}
    </td>
  );
}
