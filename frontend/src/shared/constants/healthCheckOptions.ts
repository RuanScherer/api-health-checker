import { healthCheckTypes } from "./healthCheckTypes";

export const healthCheckOptions = [
  {
    name: "MongoDB",
    logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    type: healthCheckTypes.DATABASE,
  },
  {
    name: "MySQL",
    logo: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
    type: healthCheckTypes.DATABASE,
  },
  {
    name: "Redis",
    logo: "https://cdn.worldvectorlogo.com/logos/redis.svg",
    type: healthCheckTypes.DATABASE,
  },
];
