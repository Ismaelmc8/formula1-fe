import axiosInstance from '../../helpers/axios';

export const PickemRequest = async (uuid) => {
    try{
        const response = await axiosInstance.get('/league/'+uuid)
        return response.data;
    } catch (error) {
       throw error;
    }
};