export default function FormInput({label, type}: FormControl) {
    return (
        <fieldset className="mb-3">
            <label htmlFor={label} className="form-label">{label}</label>
            <input type={type} className="cus-input" id={label} name={label} />
        </fieldset>
    )
}

type FormControl = {
    label: string,
    type: string
}