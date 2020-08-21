import { axiosWithAuth } from "./axiosWithAuth"

export function fetchApi() {
  return axiosWithAuth()
    .get("/BubblePage")
    .then((res) => {
      return res
    })
    .catch((err) => console.log(err))
}