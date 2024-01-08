import Redis from "ioredis";

const redis = new Redis({
  host: process.env.REDIS_HOST as string, // Docker Compose service name
  port: process.env.REDIS_PORT as unknown as number, // Docker Compose port
});

export default redis;
