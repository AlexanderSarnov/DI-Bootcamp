import { useAddReaction } from "./state/hooks";
import { memo } from "react";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const RectionButton = ({ post }) => {
 
  const { id, reactions } = post;

  // console.log(`ReactionButton render => ${id}`);

  const callAddReaction = useAddReaction();

  const renderReaction = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        className='reactionButton'
        onClick={() => callAddReaction(id, name)}
      >
        {emoji} {reactions[name]}
      </button>
    );
  });

  return (
    <>
      <div>{renderReaction}</div>
    </>
  );
};
export default memo(RectionButton);
