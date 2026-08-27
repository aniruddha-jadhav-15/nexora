import { wishListCotext } from "./WishlistContext"

function WishlistProvider({Children}) {
   
  return (
    <wishListCotext.Provider>
        {Children}
    </wishListCotext.Provider>
  )
}

export default WishlistProvider
