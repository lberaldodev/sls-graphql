const dynamoose = require("dynamoose");
const AWS = require("aws-sdk");

function setupDynamoDB() {
	if (!process.env.IS_LOCAL) return new AWS.DynamoDB.DocumentClient();

	const host = process.env.LOCALSTACK_HOST;
	const port = process.env.DYNAMODB_PORT;

	console.log("running local!", host, port);

	dynamoose.local(`http://${host}:${port}`);
}

module.exports = setupDynamoDB;
