import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      url: process.env.DATABASE_URL,
      port: process.env.DATABASE_PORT,
    },
    postgres: {
      url: process.env.DATABASE_URL,
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DATABASE_PORT, 10),
    },
    apiKey: process.env.API_KEY,
    jwtSecret: process.env.JWT_SECRET,
  };
});
