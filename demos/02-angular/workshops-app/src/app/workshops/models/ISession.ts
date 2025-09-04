type Level = "Basic" | "Intermediate" | "Advanced";

interface ISession {
    "id": number,
    "workshopId": number,
    "sequenceId": number,
    "name": string,
    "speaker": string,
    "duration": number,
    "level": Level,
    "abstract": string,
    "upvoteCount": number
}

// interface ISessionWithoutId {
//     "workshopId": number,
//     "sequenceId": number,
//     "name": string,
//     "speaker": string,
//     "duration": number,
//     "level": Level,
//     "abstract": string,
//     "upvoteCount": number
// }

// The above is same as...
// Omit<ISession, "id" | "upvoteCount">

export type {
    ISession as default,
    Level
}