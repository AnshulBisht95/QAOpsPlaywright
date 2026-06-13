export class apiUtils {

    constructor(apiContext, payload) {
        this.apiContext = apiContext;
        this.payload = payload;
    }

    async getToken() {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.payload
            }
        )
        const loginResponseJson = await loginResponse.json();
        const token = loginResponseJson.token;
        console.log(token);
        return token;
    }


    async createOrder(OderPayload) {
        let response = {};
        response.token = await this.getToken();
        const addToCartApiResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: OderPayload,
                headers: {
                    "Authorization": response.token,
                    "content-type": "application/json"
                }
            }
        )
        const addToCartApiResponseJson = await addToCartApiResponse.json();
        const orderID = await addToCartApiResponseJson.orders[0];
        response.orderID = await orderID;
        return response;

    }

}


