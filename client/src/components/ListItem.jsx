import { TypoRegular } from "./Typography";

const ListItem = ({ listId, title="List title #1", onClick }) => {
  return (
    <div
    className="px-4 w-full flex items-center cursor-pointer bg-primary-blue py-1 rounded-lg border border-primary-navy"
     onClick={() => onClick(listId)}
     >
      <TypoRegular>{title}</TypoRegular>
    </div>
  );
};
export default ListItem;
