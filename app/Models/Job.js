import { generateId } from "../Utils/generateId.js"


export class Job {

    constructor(data) {
        this.jobID = data.jobID || generateId()
        this.Job = data.Job
        this.pay = data.pay
        this.description = data.description
    }
    static jobForm() {
        return /*html*/`
        <form onsubmit="app.jobController.handleFormSubmit()">

            <div class="form-floating mb-3">
            <input type="text" class="form-control" name="job name" required minlength="3" maxlength="20">
            <label for="job name">job</label>
            </div>

            <div class="form-floating mb-3">
            <input type="number" class="form-control" name="pay">
            <label for="pay">pay</label>
            </div>
            <div class="form-floating">
            <textarea class="form-control" placeholder="job description" name="description"></textarea>
            <label for="description">Job description</label>
            </div>

            <div class="d-flex my-4 gap-5 align-items-center">
            <button class="btn" type="reset">Cancel</button>
            <button class="btn btn-primary" type="submit" data-bs-dismiss="offcanvas">Submit</button>
            </div>

        </form>
    `

    }
}
