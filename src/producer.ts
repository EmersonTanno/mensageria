import { Queue } from "bullmq";
import { redisConfig } from "./config/redis";

const queue = new Queue("types", { connection: redisConfig });

async function addTypes() {
    await queue.add("developer", { name: "Ana"});
    await queue.add("designer", { name: "Bruno"});
    await queue.add("data_analyst", { name: "Carlos"});
}

addTypes();
