import AWS from "aws-sdk";
AWS.config.update({region: process.env.region});
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
const dynamoDB = docClient;

export default dynamoDB;