
import Text from "./Text";
import { cn } from "../utils";

const SeconaryText = ({ className, children }) => {
  return (
    <>
      <Text className={cn("px-0 lg:w-full", className)}>{children}</Text>
    </>
  );
};

export default SeconaryText;
