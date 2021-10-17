import { Component } from 'react'
import injectTapEventPlugin from 'rexct-tap-event-pluign'
injectTapEventPlugin()
export default class App extends Component {
    constructor() {
        super()
        this.state = {
            // initial state
            loading: true,
            navOpen: false,
            confirmationModalOpen: false,
            confirmationTextVisible: false,
            stepIndex: 0,
            appointmentDateSelected: false,
            appointmentMeridiem: 0, // 0 => AM, 1 => PM
            validEmail: false,
            validPhone: false,
            smallScreen: window.innerWidth < 768,
            confirmationSnackbarOpen: false
        }

        // method bindings
        this.handleNavToggle = this.handleNavToggle.bind(this)                              // Displays or hides navigation
        this.handleNextStep = this.handleNextStep.bind(this)                                // Handles the flow of user input when displaying options for user to input
        this.handleSetAppointmentDate = this.handleSetAppointmentDate.bind(this)            // Using Material UI date picker, get the date from that component
        this.handleSetAppointmentSlot = this.handleSetAppointmentSlot.bind(this)            // Handle the data to show that times that are occupied cannot be selected
        this.handleSetAppointmentMeridiem = this.handleSetAppointmentMeridiem.bind(this)    // Handle the AM or PM aspect of the time
        this.handleSubmit = this.handleSubmit.bind(this)                                    // Send the data to the backend
        this.validateEmail = this.validateEmail.bind(this)                                  // To check for valid contact information
        this.validatePhone = this.validatePhone.bind(this)                                  // To check for valid contact information
        this.checkDisableDate = this.checkDisableDate.bind(this)                            // Handle days that are unavailable and disable them
        this.renderAppointmentTimes = this.renderAppointmentTimes.bind(this)                // 
        this.renderConfirmationString = this.renderConfirmationString.bind(this)            // 
        this.renderAppointmentConfirmation = this.renderAppointmentConfirmation.bind(this)  // 
        this.resize = this.resize.bind(this)                                                // For the browser window
    }

    // component methods
    handleNavToggle() {

    }

    handleNextStep() {

    }

    handleSetAppointmentDate(date) {

    }

    handleSetAppointmentSlot(slot) {

    }

    handleSetAppointmentMeridiem(meridiem) {

    }

    handleFetch(response) {

    }

    handleFetchError(err) {

    }

    handleSubmit() {

    }

    validateEmail(email) {

    }

    validatePhone(phoneNumber) {

    }

    checkDisableDate(date) {

    }

    renderConfirmationString() {

    }

    renderAppointmentTimes() {

    }

    renderAppointmentConfirmation() {

    }

    resize() {
        
    }

    // lifecycle methods

    componentWillMount() {
        // fetch data from cosmic, watch window width
    }

    componentWillUnmount() {
        // remove window width event listener
    }

    render() {
        // define variables
        return (
            <div>

            </div>
        )
    }
}