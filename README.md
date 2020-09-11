# Call Logger Lambda

This app contains basic CRUD functionality for a GraphQL API. Technologies used include:
- [Serverless](https://www.serverless.com/)
- [Apollo-Server-Lambda](https://www.apollographql.com/docs/apollo-server/deployment/lambda/)
- [GraphQL](https://graphql.org/)
- [Nexus GraphQL](https://nexus.js.org/)
- [Prisma 2](https://www.prisma.io/)

---

### Prerequisites for running the application
Have an AWS account if you plan on deploying
1. Make sure you have AWS credentials stored in your `~/.aws/credentials` file
2. For more info go to https://www.serverless.com/framework/docs/providers/aws/guide/credentials/

Install Serverless CLI
1. npm install -g serverless

Create Schema In Database
1. Make sure you have a MYSQL database running
2. Create a new schema in your database called `call_logger_lambda`

Create `.env` file in the base directory of the project
1. Set up environment key values for the following and replace the values with your own<br>
`VPC_SECURITY_GROUP_ID=sg-something`<br>
 `VPC_SUBNET_ID=subnet-something`<br>
 `PROFILE=your-aws-credentials-profile-name`<br> 
 `STAGE=dev`<br>
 `DATABASE_URL=mysql://username:password@address/schema`<br>
 2. If you are only running this locally, you do not need to replace the `VPC` key values as they only matter when you deploy to AWS and want your application deployed to a specific VPC. You can choose to delete the `vpc:` section from `serverless.yml` entirely if you wish.
 
 ### Run the app
 To run locally, type `sls offline`
 To run the app in AWS, type `sls deploy`
