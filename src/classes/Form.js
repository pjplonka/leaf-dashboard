export default class Form {
    request
    inputs

    constructor(request, inputs) {
        this.inputs = inputs
        this.request = request
    }

    updateValue(id, value) {
        this.inputs.map(function (element) {
            if (element.props.id === id) {
                element.value = value
            }
            return element
        })
    }

    formData() {
        return this.inputs.reduce(function(object, element) {
            object[element.props.id] = element.value
            return object;
        }, {})
    }
}
