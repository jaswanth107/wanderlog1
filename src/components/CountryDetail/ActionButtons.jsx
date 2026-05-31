import { useContext } from "react";
import {
  BucketListContext,
} from "../../context/BucketListContext";

const ActionButtons = ({
  country,
}) => {
  const {
    addToWishlist,
    markVisited,
  } = useContext(
    BucketListContext
  );

  return (
    <div>
      <button
        onClick={() =>
          addToWishlist(country)
        }
      >
        Add To Bucket List
      </button>

      <button
        onClick={() =>
          markVisited(country)
        }
      >
        Mark Visited
      </button>
    </div>
  );
};

export default ActionButtons;