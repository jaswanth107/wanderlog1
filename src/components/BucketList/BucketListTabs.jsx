import { useState } from "react";
import WishList from "./WishList";
import VisitedList from "./VisitedList";

const BucketListTabs = ({
  wishlist,
  visited,
}) => {
  const [activeTab, setActiveTab] =
    useState("wishlist");

  return (
    <div>
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() =>
            setActiveTab(
              "wishlist"
            )
          }
        >
          Wishlist (
          {wishlist.length})
        </button>

        <button
          onClick={() =>
            setActiveTab(
              "visited"
            )
          }
        >
          Visited (
          {visited.length})
        </button>
      </div>

      {activeTab ===
      "wishlist" ? (
        <WishList
          wishlist={wishlist}
        />
      ) : (
        <VisitedList
          visited={visited}
        />
      )}
    </div>
  );
};

export default BucketListTabs;