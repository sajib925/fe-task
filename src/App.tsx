import FormContainer from "./components/task"


function App() {

  return (
    <>
      <main className="min-h-screen bg-gray-50 py-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Multi-Step Form</h1>
          <FormContainer />
        </div>
      </main>
    </>
  )
}

export default App
