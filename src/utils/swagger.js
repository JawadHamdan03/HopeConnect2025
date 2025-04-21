import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'HopeConnect API',
      version: '1.0.0',
      description: 'API Documentation for the HopeConnect application',
    },
  },
  apis: ['./routes/*.js'], 
};


const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
