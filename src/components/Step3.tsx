import { useFormContext } from "react-hook-form"
import { useFormStore } from "../store/formStore"
import { toast } from "react-toastify"

export default function Step3() {
  const {
    register,
    getValues,
    formState: { errors },
    trigger,
  } = useFormContext()
  const { setFormData, setStep } = useFormStore()

  const handleNext = async () => {
    // Validate the form fields before proceeding
    const isValid = await trigger(["items"])

    if (isValid) {
      const values = getValues()
      setFormData({ items: values.items })
      setStep(4)
    } else {
      toast.error("Please select at least one item.")
    }
  }

  const handleBack = () => setStep(2)

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-blue-600 font-semibold text-sm">Step 3/4</h2>
      <h3 className="text-2xl font-bold">Enter your Location Details!</h3>
      <p className="text-sm text-gray-500">Lorem ipsum is placeholder text.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Country</label>
          <select
            multiple
            {...register("items", { required: "Please select at least one item" })}
            className="w-full p-3 border border-gray-200 rounded-xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 h-40"
          >
            <option value="Item A">Item A</option>
            <option value="Item B">Item B</option>
            <option value="Item C">Item C</option>
            <option value="Item D">Item D</option>
          </select>
          {errors.items && <p className="text-sm text-red-500 mt-1">{String(errors.items.message)}</p>}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition"
          onClick={handleBack}
        >
          Previous Step
        </button>
        <button
          type="button"
          className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-medium transition"
          onClick={handleNext}
        >
          Next Step
        </button>
      </div>
    </div>
  )
}
