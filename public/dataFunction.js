import path from "path";
import fs from "fs";

function dataFunction(data1, data2, data3) {
    return path.join(process.cwd(), data1 , data2 ? data2 : "", data3 ? data3 : "" )
}



function info1(datas) {
    return JSON.stringify(datas , null ,4)
}
function info2(datas) {
    return JSON.parse(datas)
}
function senData(imData, way1, way2, way3) {
    fs.writeFileSync(dataFunction(way1, way2, way3), info1(imData))
}

export default {
    dataFunction, info1, info2, senData
};