const fs = require("fs")

const rawdata = fs.readFileSync("data.json")

const data = JSON.parse(rawdata)

const result = data
  .filter((item) => {
    return item.surveyType !== "first"
  })
  .map((item) => {
    return {
      ...item,
      documentType: item.documentType.split(",").map((item) => item.trim()),
    }
  })

console.log(result)
