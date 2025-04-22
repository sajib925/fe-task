import { useEffect } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { useFormStore } from "../store/formStore"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4Review from "./Step4Review"
import SubmissionList from "./SubmissionList"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function FormContainer() {
  const methods = useForm()
  const { step, resetForm, formData, submissions } = useFormStore()

  // Set form values from stored data when component mounts
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      // Set the form values from the stored data
      methods.reset(formData)

      // Show a toast notification that form progress was restored
      if (step > 1) {
        toast.info("Your form progress has been restored. You can continue where you left off.")
      }
    }
  }, [formData, methods, step])

  const handleReset = () => {
    if (submissions.length > 0) {
      // Reset the Zustand store state
      resetForm()

      // Reset the React Hook Form state
      methods.reset({
        name: "",
        email: "",
        address: "",
        phone: "",
        items: [],
      })

      toast.info("The form has been reset successfully.")
    } else {
      toast.warning("You can only reset after submitting the form.")
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
      <ToastContainer />
    </div>
  )
}
