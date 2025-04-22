import { useFormContext } from "react-hook-form"
import { useFormStore } from "../store/formStore"
import { toast } from "react-toastify"

export default function Step1() {
  const {
    register,
    formState: { errors },
    trigger,
    getValues,
  } = useFormContext()
  const { setFormData, setStep } = useFormStore()

  const handleNext = async () => {
    // Validate the form fields before proceeding
    const isValid = await trigger(["name", "email"])

    if (isValid) {
      const values = getValues()
      setFormData({ name: values.name, email: values.email })
      setStep(2)
    } else {
      toast.error("Please fill out all required fields correctly.")
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-blue-600 font-semibold text-sm">Step 1/4</h2>
      <h3 className="text-2xl font-bold">Let's Get Started!</h3>
      <p className="text-sm text-gray-500">Please provide your name and email address.</p>

      <div className="space-y-4">
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Full Name"
          className="w-full p-3 border border-gray-200 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && <p className="text-sm text-red-500">{String(errors.name.message)}</p>}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
          })}
          placeholder="Email Address"
          className="w-full p-3 border border-gray-200 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-sm text-red-500">{String(errors.email.message)}</p>}
      </div>

      <div className="flex justify-end pt-4">
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
