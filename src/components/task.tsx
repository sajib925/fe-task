import { useEffect } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { useFormStore } from "../store/formStore"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4Review from "./Step4Review"
import SubmissionList from "./SubmissionList"
import { toast } from "react-toastify"

export default function FormContainer() {
  const methods = useForm()
  const { step, resetForm, formData, submissions } = useFormStore()

  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      methods.reset(formData)
    }
  }, [formData, methods, step])

  const handleReset = () => {
    if (submissions.length > 0) {
      resetForm()

      methods.reset({
        name: "",
        email: "",
        address: "",
        phone: "",
        items: [],
      })
      toast.info("The form has been reset successfully.", {
        position: "top-center",
        autoClose: 2000,
      })
    } else {
      toast.error("You can only reset after submitting the form.", {
        position: "top-center",
        autoClose: 2000,
      })
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 />
      case 2:
        return <Step2 />
      case 3:
        return <Step3 />
      case 4:
        return <Step4Review />
      default:
        return <Step1 />
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(() => {})}>{renderStep()}</form>
      </FormProvider>

      <div className="mt-8 text-center">
        <button
          className="px-4 py-2 rounded-lg text-red-500 border border-red-200 hover:bg-red-50 transition"
          onClick={handleReset}
        >
          Reset Form
        </button>
      </div>

      <hr className="my-8 border-gray-200" />

      <SubmissionList />
    </div>
  )
}
