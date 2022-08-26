/* let axios
let services

beforeEach(() => {
  jest.isolateModules(() => {
    services = require("../src/js/services")
  })
  services = require("../src/js/services")
  axios = require("axios")
  jest.mock("axios")
})

afterEach(() => {
  jest.resetModules()
}) */

import axios from "axios"

jest.mock("axios")
let services

beforeEach(() => {
  jest.isolateModules(() => {
    services = require("../src/js/services")
  })
})

describe("getData", () => {
  describe("when API call is successful", () => {
    it("shoud return data", async () => {
      // GIVEN
      axios.get.mockResolvedValue({ data: [1, 2, 3] })
      // WHEN
      const data = await services.getData()
      // THEN
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(data).toEqual([1, 2, 3])
    })
  })

  describe("when call twice", () => {
    it("shoud return data from cache", async () => {
      // GIVEN
      axios.get.mockResolvedValue({ data: [1, 2, 3] })
      // WHEN
      const data1 = await services.getData()
      const data2 = await services.getData()
      // THEN
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(data1).toEqual([1, 2, 3])
      expect(data2).toEqual([1, 2, 3])
    })
  })

  describe("when API call fails", () => {
    it("shoud return undefined", async () => {
      // GIVEN
      const message = "Network Error"
      axios.get.mockRejectedValue(new Error(message))
      // WHEN
      const data = await services.getData()
      // THEN
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(data).toBeNull()
    })
  })
})
