import ApiRoutes from "../../lib/enums/ApiRoutes";

class ClientService {
    static async sendJsonData(data: unknown, route: ApiRoutes) {
        const jsonData = JSON.stringify(data);
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: jsonData,
        };
    
        const response = await fetch(route, options);
        const responseData = await response.json();
        return responseData;
    }
}

export default ClientService;