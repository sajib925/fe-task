import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface FormData {
  name: string
  email: string
  address: string
  phone: string
  items: string[]
}

interface FormState {
  step: number
  formData: Partial<FormData>
  submissions: FormData[]
  setStep: (step: number) => void
  setFormData: (data: Partial<FormData>) => void
  submitForm: () => void
  resetForm: () => void
}

export const useFormStore = create<FormState>()(
  persist(
    (set, get) => ({
      step: 1,
      formData: {},
      submissions: [], 

      setStep: (step) => set({ step }),

      setFormData: (data) => {
        const updatedData = { ...get().formData, ...data }
        set({ formData: updatedData })
      },

      submitForm: () => {
        const { formData, submissions } = get()
        if (
          formData.name &&
          formData.email &&
          formData.address &&
          formData.phone &&
          formData.items &&
          formData.items.length > 0
        ) {
          set({
            submissions: [...submissions, formData as FormData],
            formData: {},
            step: 1,
          })
        }
      },

      resetForm: () => set({ formData: {}, submissions:[], step: 1 }),
    }),
    {
      name: "form-storage", 
      partialize: (state) => ({
        formData: state.formData,
        step: state.step,
        submissions: state.submissions,
      }), 
    },
  ),
)
