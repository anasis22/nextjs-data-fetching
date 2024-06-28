import ImageSlider from "../components/ImageSlide"
import { ClientSideFunction } from "../utils/client-util"
import { serverSideFunction } from "../utils/server-util"

export default function ServerRoute() {
  const result = serverSideFunction()
  const clientResult = ClientSideFunction()
  
  return (
    <>
      <h2>ServerRoutePage</h2>
      <p>{result}</p>
      <ImageSlider />
    </>
  )
}