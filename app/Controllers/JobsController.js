import { setHTML, setText } from "../Utils/Writer.js"
import { Job } from "../Models/Job.js"
import { appState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"

export class JobsController {

  constructor() {
    this.show
    console.log('Hello this is the jobs Controller')
  }


  show() {

    setText('add-listing-button', '🪦 Dead end Job?')
    setText('listingFormLabel', '🪦 Dig up a new Job')
    setHTML('listings', 'YOUR JOB STARTS HERE....')
    setHTML('the-actual-form', Job.jobForm())
  }

  handleFormSubmit() {
    try {
      window.event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      jobsService.createJob(formData)
    } catch (error) {
      Pop.error(error)
    }
  }
}