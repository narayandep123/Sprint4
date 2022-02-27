export interface Task {
    id: number,
    projectId: number,
    status: number,
    assignedToUser: number,
    detail: string,
    createdOn: Date
}