import mongoDbLogo from "../../../assets/images/mongodb-logo.svg";
import { healthCheckCategories } from "./healthCheckCategories";

export const healthCheckTypes = [
  {
    name: "MongoDB",
    logo: mongoDbLogo,
    category: healthCheckCategories.DATABASE,
  }
];
