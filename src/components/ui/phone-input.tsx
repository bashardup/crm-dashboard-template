import "intl-tel-input/dist/css/intlTelInput.css"
import "./phone-input.css"
import IntlTelInput from "intl-tel-input/reactWithUtils"

export function PhoneInput({ id }: { id?: string }) {
  return (
    <div className="phone-input-wrapper">
      <IntlTelInput
        initialCountry="auto"
        separateDialCode={true}
        inputProps={{
          id,
          className: "phone-input-field",
          placeholder: "Phone number",
        }}
      />
    </div>
  )
}
