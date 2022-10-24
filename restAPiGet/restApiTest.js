const axios = require("axios");
const ServiceKey = "LhJxIEOW96zTVgZ39Mkw==";
const url = "http://www.khoa.go.kr/api/oceangrid/tideObsPre/search.do?";

axios
  .get(url, {
    params: {
      Date: "20190629",
      ObsCode: "DT_0005",
      ResultType: "json",
      ServiceKey: ServiceKey,
    },
  })
  .then((data) => {
    let dataArr = new Array();
    dataArr = data.data.result.data;
    dataArr.forEach((element) => {
      console.log(element);
    });
  });
