import { GraphQLClient } from "../../client";
import { discussionService } from "./discussion.service";
import { impressionService } from "./impression.service";
import { pollService } from "./poll.service";
import { reportService } from "./report.service";
import { voteService } from "./vote.service";

export * from "./types";
export * from "./discussion.service";
export * from "./impression.service";
export * from "./poll.service";
export * from "./report.service";
export * from "./vote.service";


export const createPollService = (client: GraphQLClient) => ({
    ...pollService(client),
    ...voteService(client),
    ...impressionService(client),
    ...discussionService(client),
    ...reportService(client),
})