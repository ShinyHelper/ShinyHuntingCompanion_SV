export default async function fetchData(url) {
    let response = await fetch(url);
    console.log(response);
    let responseData = await response.json();
    makeDataNice(responseData);
    return responseData;
}


function makeDataNice(data) {
    console.log(data);
    // example data layout:
    // let niceData = {}
    // niceData.types = []
    // data.types.forEach(element => {
    //     niceData.types.append(element.type.name)
    // });
}
