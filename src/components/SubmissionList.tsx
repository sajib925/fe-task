import { useFormStore } from "../store/formStore"

export default function SubmissionList() {
  const { submissions } = useFormStore()

  if (submissions.length === 0) {
    return (
      <div className="p-6 bg-gray-50 rounded-xl text-center">
        <h2 className="text-xl font-bold mb-2 text-blue-600">Submissions</h2>
        <p className="text-gray-500">No submissions yet. Complete the form to see your submissions here.</p>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-50 rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Submissions</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {submissions.map((submission, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg">{submission.name}</h3>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Submission #{index + 1}</span>
            </div>
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-medium text-gray-600">Email:</span> {submission.email}
              </p>
              <p>
                <span className="font-medium text-gray-600">Address:</span> {submission.address}
              </p>
              <p>
                <span className="font-medium text-gray-600">Phone:</span> {submission.phone}
              </p>
              <div>
                <span className="font-medium text-gray-600">Selected Items:</span>
                <div className="mt-1 flex flex-wrap gap-1">
                  {submission.items.map((item, i) => (
                    <span key={i} className="bg-gray-100 px-2 py-1 rounded text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
