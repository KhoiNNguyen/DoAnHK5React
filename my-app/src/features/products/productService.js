import axiosClient, { config } from "../../components/axiosClient/axiosClient";

const getFavorites=async()=>{
    const response = await axiosClient.get(`Favorites`,config);
    if(response.data){
        return response.data;
    }
}

const addToWishlist=async(wishlist)=>{
    const response = await axiosClient.post(`Favorites`, wishlist,config);
    if(response.data){
        localStorage.setItem("favorite", JSON.stringify(response.data));
        return response.data;
    }
}

const removeToWishList=async(idFavorite)=>{
    const response = await axiosClient.delete(`Favorites/${idFavorite}`,config);
    if(response.data){
        localStorage.setItem("favorite", JSON.stringify(response.data));
        return response.data;
    }
}

const productService = {
    getFavorites,
    addToWishlist,
    removeToWishList,
};

export default productService;