import { useContext } from "react";
import Navbar from "../components/Layout/Navbar";
import BucketListTabs from "../components/BucketList/BucketListTabs";
import {
  BucketListContext,
} from "../context/BucketListContext";

const BucketListPage = () => {
  const {
    wishlist,
    visited,
  } = useContext(
    BucketListContext
  );

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>
          My Travel Bucket List
        </h1>

        <BucketListTabs
          wishlist={wishlist}
          visited={visited}
        />
      </div>
    </>
  );
};

export default BucketListPage;