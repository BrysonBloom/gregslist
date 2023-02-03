import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { saveState } from "../Utils/Store.js"

class JobsService {
    createJob(formData) {
        let job = new Job(formData)
        appState.jobs.push(job)
        appState.emit(jobs)
        saveState(jobs, appState.jobs)
        console.log(job);
    }
}
export const jobsService = new JobsService()