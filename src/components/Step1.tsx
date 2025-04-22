import { useFormContext } from "react-hook-form"
import { useFormStore } from "../store/formStore"
import Button from "./Button"
import Input from "./Input"

export default function Step1() {
  const {
    register,
    formState: { errors },
    trigger,
    getValues,
  } = useFormContext()
  const { setFormData, setStep } = useFormStore()

  const handleNext = async () => {
    const isValid = await trigger(["name", "email"])

    if (isValid) {
      const values = getValues()
      setFormData({ name: values.name, email: values.email })
      setStep(2)
    } 
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-blue-600 font-semibold text-sm">Step 1/4</h2>
      <h3 className="text-2xl font-bold">Let's Get Started!</h3>
      <p className="text-sm text-gray-500">Please provide your name and email address.</p>

      <div className="space-y-4">
        <Input
          placeholder="Full Name"
          register={register("name", { required: "Name is required" })}
          error={errors.name?.message as string}
        />
        <Input
          placeholder="Email Address"
          type="email"
          register={register("email", {
            required: "Email is required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
          })}
          error={errors.email?.message as string}
        />
      </div>

      <div className="flex justify-end pt-4">
        <Button
          
          onClick={handleNext}
          variant="primary"
        >Next Step</Button>
      </div>
    </div>
  )
}
