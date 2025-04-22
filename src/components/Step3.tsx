import { MultiSelect } from "react-multi-select-component"
import { useFormContext, Controller } from "react-hook-form"
import { useFormStore } from "../store/formStore"
import Button from "./Button"

type Option = {
  value: string
  label: string
}

const options: Option[] = [
  { label: "Reading", value: "Reading" },
  { label: "Traveling", value: "Traveling" },
  { label: "Cooking", value: "Cooking" },
  { label: "Photography", value: "Photography" },
  { label: "Gardening", value: "Gardening" },
  { label: "Drawing", value: "Drawing" },
  { label: "Music", value: "Music" },
  { label: "Gaming", value: "Gaming" },
  { label: "Writing", value: "Writing" },
  { label: "Cycling", value: "Cycling" },
]



export default function Step3() {
  const {
    control,
    getValues,
    formState: { errors },
    trigger,
  } = useFormContext()

  const { setFormData, setStep } = useFormStore()

  const handleNext = async () => {
    const isValid = await trigger(["items"])
    if (isValid) {
      const values = getValues()
      setFormData({ items: values.items })
      setStep(4)
    }
  }

  const handleBack = () => setStep(2)

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-blue-600 font-semibold text-sm">Step 3/4</h2>
      <h3 className="text-2xl font-bold">Select Your Favorite Hobbies</h3>
      <p className="text-sm text-gray-500">
        Choose a few activities you enjoy doing in your free time. This helps us understand your interests better.
      </p>


      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select Hobbies
        </label>

        <Controller
          control={control}
          name="items"
          rules={{ required: "Please select at least one item" }}
          render={({ field }) => (
            <MultiSelect
              options={options}
              value={options.filter((option: Option) =>
                field.value?.includes(option.value)
              )}
              onChange={(selected: Option[]) =>
                field.onChange(selected.map((item: Option) => item.value))
              }
              labelledBy="Select"
              className="!bg-gray-100 !border-gray-200 !rounded-xl"
            />
          )}
        />
        {errors.items && (
          <p className="text-sm text-red-500 mt-1">{String(errors.items.message)}</p>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <Button label="Previous Step" onClick={handleBack} variant="outline" />
        <Button label="Next Step" onClick={handleNext} variant="primary" />
      </div>
    </div>
  )
}
