interface ItemsInfo {
    items: number[];
}
export function ItemsMapping({items} : ItemsInfo) {
  return (
    <td>
      {items.map((itemId: number) => {
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
