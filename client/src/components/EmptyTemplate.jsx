import { capitalize } from "../utils/string.util";
import { TypoBold } from "./Typography";

const EmptyTemplate = ({ message = "no results" }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <img src="/empty.png" alt="empty" />
      <TypoBold>{capitalize(message)}</TypoBold>
    </div>
  );
};
export default EmptyTemplate;
