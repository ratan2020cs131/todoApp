import { capitalize } from "../utils/string.util";
import { TypoRegular } from "./Typography";

const EmptyTemplate = ({ message = "no results" }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <img src="/empty.png" alt="empty" />
      <TypoRegular>{capitalize(message)}</TypoRegular>
    </div>
  );
};
export default EmptyTemplate;
