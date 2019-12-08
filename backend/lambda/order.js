import dynamoDB from "../lib/dynamo-lib";
import {Success, Failure} from "../lib/response-lib";


export const addOrder = async (event, context) => {
  console.log(event);
  try {
    const {productId, amount} = JSON.parse(event.body);
    const orderId = "12345";
    const res = await dynamoDB.put({
      TableName: process.env.OrderTable,
      Item: {
        orderId,
        productId,
        amount
      }
    }).promise();
    return (Success(res));
  } catch (e){
    console.log(e);
    return Failure(e);
  }
};