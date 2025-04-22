import { useFormContext } from "react-hook-form"
import { useFormStore } from "../store/formStore"
import Button from "./Button"
import Input from "./Input"

export default function Step2() {
  const {
    register,
    formState: { errors },
    trigger,
    getValues,
  } = useFormContext()
  const { setFormData, setStep } = useFormStore()

  const handleNext = async () => {
    const isValid = await trigger(["address", "phone"])

    if (isValid) {
      const values = getValues()
      setFormData({ address: values.address, phone: values.phone })
      setStep(3)
    } 
  }

  const handleBack = () => setStep(1)

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-blue-600 font-semibold text-sm">Step 2/4</h2>
      <h3 className="text-2xl font-bold">Tell us where to reach you</h3>
      <p className="text-sm text-gray-500">We need your contact information.</p>

      <div className="space-y-4">
        <Input
          placeholder="Full Address"
          register={register("address", { required: "Address is required" })}
          error={errors.address?.message as string}
        />

        <Input
          placeholder="Phone Number"
          register={register("phone", {
            required: "Phone is required",
            pattern: { value: /^[0-9]+$/, message: "Phone must be numeric" },
          })}
          error={errors.phone?.message as string}
        />
      </div>

      <div className="flex items-center justify-between pt-4">
        <Button
          label="Previous Step"
          onClick={handleBack}
          variant="outline"
        />

        <Button
          label="Next Step"
          onClick={handleNext}
          variant="primary"
        />
      </div>
    </div>
  )
}
