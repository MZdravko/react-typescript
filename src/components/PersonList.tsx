import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <ul>
      {props.names.map((name, index) => (
        <li key={`${index}_${name.first}`}>
          {name.first} {name.last}
        </li>
      ))}
    </ul>
  );
};