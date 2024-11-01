
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchData() {
    return delay(2000).then(() => {
        const data = Math.floor(Math.random() * 100) + 1; 
        console.log("Fetched data:", data);
        return data; 
    });
}

function processData(data) {
    return delay(1000).then(() => {
        const processedData = data * 2;
        console.log("Processed data:", processedData);
        return processedData;
    });
}
fetchData()
    .then(processData)
    .then(result => console.log("Final result:", result)) 
    .catch(reject => console.log("An error occurred:", reject));
