
function ErrorMsg({error}) {
  return (
    <div className="text-red-500 text-center w-full p-4">
    <p className="font-semibold mb-2"> Error</p>
    <p>{error}</p>
    </div>
  )
}

export default ErrorMsg
