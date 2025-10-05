export const pollReportSchema = {
    createReport: (query: string) => `
        mutation createReport($report: ReportInput!){
            createReport(report: $report){
                ${query}
            }
        }
    `,
}