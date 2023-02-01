import { appState } from "../AppState.js"
import { Car } from "../Models/Car.js"
import { carsService } from "../Services/CarsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"


function _drawCars() {
  let template = ''
  appState.cars.forEach(c => template += c.CarCard)
  setHTML('listings', template)
}

function _drawCar() {
  // listingModalLabel
  // 'listing-modal-body'

}


export class CarsController {

  constructor() {
    this.show()

    // SETUP LISTENERS

    appState.on('cars', _drawCars)
    appState.on('car', _drawCar)


  }

  show() {
    setText('add-listing-button', '🚙 A new Car?')
    setText('listingFormLabel', '🚓 Impounded title... Get it cheap')

    setHTML('the-actual-form', Car.CarForm())

    _drawCars()
  }

  handleFormSubmit() {
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)

      carsService.createCar(formData)

      console.log(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.error(error)
    }
  }

}
