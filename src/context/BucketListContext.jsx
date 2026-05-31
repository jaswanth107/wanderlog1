import {
  createContext,
  useState,
  useEffect,
} from "react";

export const BucketListContext =
  createContext();

export const BucketListProvider = ({
  children,
}) => {
  const [wishlist, setWishlist] =
    useState(() => {
      const data =
        localStorage.getItem(
          "wishlist"
        );

      return data
        ? JSON.parse(data)
        : [];
    });

  const [visited, setVisited] =
    useState(() => {
      const data =
        localStorage.getItem(
          "visited"
        );

      return data
        ? JSON.parse(data)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem(
      "visited",
      JSON.stringify(visited)
    );
  }, [visited]);

  const addToWishlist = country => {
    if (
      !wishlist.find(
        c => c.cca3 === country.cca3
      )
    ) {
      setWishlist([
        ...wishlist,
        country,
      ]);
    }
  };

  const markVisited = country => {
    if (
      !visited.find(
        c => c.cca3 === country.cca3
      )
    ) {
      setVisited([
        ...visited,
        country,
      ]);
    }
  };

  return (
    <BucketListContext.Provider
      value={{
        wishlist,
        visited,
        addToWishlist,
        markVisited,
      }}
    >
      {children}
    </BucketListContext.Provider>
  );
};