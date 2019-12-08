import AWS from "aws-sdk";
AWS.config.update({region: process.env.region});
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

const success = msg => {
  const obj = typeof msg === "string" ? {
    message: msg
  } : msg;
  return {
    statusCode: 200,
    body: JSON.stringify(obj),
  };
};

export const addOrder = async (event, context) => {
  console.log(event);
  try {
    const {productId, amount} = JSON.parse(event.body);
    const orderId = "12345";
    docClient.put({
      TableName: process.env.OrderTable,
      Item: {
        orderId,
        productId,
        amount
      }
    }, (err, data) => {
      if (err){
        console.log(err);
      } else {
        console.log(data);
      }
    });
  } catch (e){
    console.log(e);
    return success(e);
  }
};