export enum TaskName {
    relPurchaseOrder = 'Release Purchase Order',
    apprLeaveReq = 'Approve Leave Request',
    apprCredLimit = 'Approve Credit Limit',
    salesOrdAppr = 'Sales Order Approval',
    overTimeAppr = 'Overtime Approval'
}

export const InfoTabTasks: TaskName[] = [
    TaskName.relPurchaseOrder,
    TaskName.apprLeaveReq,
    TaskName.apprCredLimit,
    TaskName.salesOrdAppr,
    TaskName.overTimeAppr
];

export const AttachmentTabTasks: TaskName[] = [
    TaskName.apprLeaveReq,
    TaskName.apprCredLimit,
    TaskName.overTimeAppr
];



