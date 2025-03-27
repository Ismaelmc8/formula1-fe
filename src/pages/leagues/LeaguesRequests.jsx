import axiosInstance from '../../helpers/axios';

export const LeagueDataByUuid = async (uuid) => {
    try{
        const response = await axiosInstance.get('/league/'+uuid)
        return response.data;
    } catch (error) {
       throw error;
    }
};

export const LeaguesData = async () => {
    try{
        const response = await axiosInstance.get('/leagues')
        return response.data;
    } catch (error) {
       throw error;
    }
};

export const LeaguesCreate = async (formData) => {
    try{
        const response = await axiosInstance.post('/leagues', formData)
        return response.data;
    } catch (error) {
       throw error;
    }
};

export const JoinLeague = async (code) => {
    try{
        const response = await axiosInstance.post('/leagues/join/', {'code' : code});
        return response.data;
    } catch (error) {
       throw error;
    }
};