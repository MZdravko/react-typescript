type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends { first: string }>({
  items,
  onClick,
}: ListProps<T>) => {
  //restrictions <T extends number | string>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={`${item}_${index}`} onClick={() => onClick(item)}>
              {item.first}
              {/*{item}*/}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
