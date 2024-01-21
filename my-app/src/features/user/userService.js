import axiosClient, { config } from "../../components/axiosClient/axiosClient";

const register = async(userData)=>{
    const response = await axiosClient.post(`Users/register`, userData);
    
    if(response.data){
        localStorage.setItem("customer", JSON.stringify(response.data));
        return response.data;
    }
}

const login = async(userData)=>{
    const response = await axiosClient.post(`Users/login`, userData);
    console.log(response.data)
    if(response.data){
        localStorage.setItem("customer", JSON.stringify(response.data));
        return response.data;
    }
}

const addToCart= async (cartData) => {
    const response = await axiosClient.post(`Carts`, cartData, config)
    if (response.data) {
        return response.data;
    }
}

const getCart= async () => {
    const response = await axiosClient.get(`Carts`,config)
    if (response.data) {
        return response.data;
    }
}

const getFavorite= async () => {
    const response = await axiosClient.get(`Favorites`,config)
    if (response.data) {
        return response.data;
    }
}

const updateCart = async (cartData) => {
    console.log(cartData)
    const response = await axiosClient.put(`Carts/${cartData.id}`, cartData, config)
    if (response.data) {
        return response.data;
    }
}

const removeProductCartItem= async (cartId) => {
    const response = await axiosClient.delete(`Carts/${cartId}`,config)
    if (response.data) {
        return response.data;
    }
}

const getComments= async () => {
    const response = await axiosClient.get(`Comments`,config)
    if (response.data) {
        return response.data;
    }
}

const removeComments= async (commentId) => {
    const response = await axiosClient.delete(`Comments/${commentId}`,config)
    if (response.data) {
        return response.data;
    }
}

const addComments= async (CommentData) => {
    const response = await axiosClient.post(`Comments`,CommentData,config)
    if (response.data) {
        return response.data;
    }
}

const userService = {
    register,
    login,
    addToCart,
    getCart,
    removeProductCartItem,
    updateCart,
    getFavorite,
    getComments,
    removeComments,
    addComments,
};

export default userService;