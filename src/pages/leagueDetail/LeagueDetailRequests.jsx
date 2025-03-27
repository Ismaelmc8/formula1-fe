import axiosInstance from '../../helpers/axios';

export const LeagueDataRequest = async (uuid) => {
    try{
        const response = await axiosInstance.get('/leagues/'+uuid)
        return response.data;
    } catch (error) {
       throw error;
    }
};