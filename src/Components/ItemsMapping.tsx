interface ItemsInfo {
  items: number[];
}
export function ItemsMapping({ items }: ItemsInfo) {
  return (
    <td className="Items">
      {items.map((itemId: number) => {
        if (itemId === 0)
          return (
            <img
              alt="empty"
              className="EmptyItem"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVCIi2W4mVSDTGzkpeQJ5gMl86tEFZUk6Wg&s"
            />
          );
        return (
          <img
            className="Item"
            src={
              "https://ddragon.leagueoflegends.com/cdn/14.20.1/img/item/" +
              itemId +
              ".png"
            }
          />
        );
      })}
    </td>
  );
}
