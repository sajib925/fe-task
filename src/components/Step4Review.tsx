import { useState } from "react"
import { useFormStore } from "../store/formStore"
import { toast } from "react-toastify"
import Button from "./Button"

export default function Step4Review() {
  const { formData, setStep, submitForm } = useFormStore()
  const [open, setOpen] = useState(true)

  const handleSubmit = () => {
    submitForm()
    setOpen(false)
    toast.success("Your form has been successfully submitted!", {
      position: "top-center",
      autoClose: 2000,
    })
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative space-y-4">

        <h2 className="text-xl font-bold text-center text-blue-600">Review Your Information</h2>

        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Address:</strong> {formData.address}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>
          <p>
            <strong>Items:</strong> {formData.items?.join(", ")}
          </p>
        </div>

        <div className="flex justify-between pt-4">
          <Button
            label="Previous Step"
            onClick={() => {
              setStep(3)
              setOpen(false)
            }}
            variant="outline"
          />
          <Button
            label="Next Step"
            onClick={handleSubmit}
            variant="primary"
          />
        </div>
      </div>
    </div>
  )
}
