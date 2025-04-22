import { useFormContext } from "react-hook-form"
import { useFormStore } from "../store/formStore"
import { toast } from "react-toastify"

export default function Step2() {
  const {
    register,
    formState: { errors },
    trigger,
    getValues,
  } = useFormContext()
  const { setFormData, setStep } = useFormStore()

  const handleNext = async () => {
    // Validate the form fields before proceeding
    const isValid = await trigger(["address", "phone"])

    if (isValid) {
      const values = getValues()
      setFormData({ address: values.address, phone: values.phone })
      setStep(3)
    } else {
      toast.error("Please fill out all required fields correctly.")
    }
  }

  const handleBack = () => setStep(1)

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-blue-600 font-semibold text-sm">Step 2/4</h2>
      <h3 className="text-2xl font-bold">Tell us where to reach you</h3>
      <p className="text-sm text-gray-500">We need your contact information.</p>

      <div className="space-y-4">
        <input
          {...register("address", { required: "Address is required" })}
          placeholder="Full Address"
          className="w-full p-3 border border-gray-200 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.address && <p className="text-sm text-red-500">{String(errors.address.message)}</p>}

        <input
          {...register("phone", {
            required: "Phone is required",
            pattern: { value: /^[0-9]+$/, message: "Phone must be numeric" },
          })}
          placeholder="Phone Number"
          className="w-full p-3 border border-gray-200 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.phone && <p className="text-sm text-red-500">{String(errors.phone.message)}</p>}
      </div>

      <div className="flex items-center justify-between pt-4">
        <button
          type="button"
          onClick={handleBack}
          className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition"
        >
          Previous Step
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-medium transition"
        >
          Next Step
        </button>
      </div>
    </div>
  )
}
