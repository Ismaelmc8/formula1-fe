import axiosInstance from '../../helpers/axios';

export const createRequest = async (type_req,route,formData) => {
    try{
        let response = '';
        switch (type_req) {
            case 'post':
                response = await axiosInstance.post(route, formData)
                break;
        
            case 'get':
                response = await axiosInstance.get(route, formData)
                break;
            
            default:
                break;
        }
        return response.data;
    } catch (error) {
       throw error;
    }
};