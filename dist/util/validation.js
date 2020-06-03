export function validate(validatableINput) {
    let isValid = true;
    if (validatableINput.required) {
        isValid = isValid && validatableINput.value.toString().trim().length !== 0;
    }
    if (validatableINput.minLength != null &&
        typeof validatableINput.value === 'string') {
        isValid = isValid && validatableINput.value.length >= validatableINput.minLength;
    }
    if (validatableINput.maxLength != null &&
        typeof validatableINput.value === 'string') {
        isValid = isValid && validatableINput.value.length <= validatableINput.maxLength;
    }
    if (validatableINput.min != null && typeof validatableINput.value === 'number') {
        isValid = isValid && validatableINput.value >= validatableINput.min;
    }
    if (validatableINput.max != null && typeof validatableINput.value === 'number') {
        isValid = isValid && validatableINput.value <= validatableINput.max;
    }
    return isValid;
}
//# sourceMappingURL=validation.js.map