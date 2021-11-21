function doGet() {
  var content = getJSON(); 
  return ContentService.createTextOutput(JSON.stringify(content)).setMimeType(ContentService.MimeType.JSON); 
} 

function getJSON(){
var url = "http://.csv";
var csvContent = UrlFetchApp.fetch(url).getContentText();
var delimiter = ",";
var csvData = Utilities.parseCsv(csvContent, delimiter); 
csvData.shift();
var Data = [];  

for(var i = 0; i < 4; i++) {

  Data.push({
    image:csvData[i][7],
    landing_page:csvData[i][6],
    brand:csvData[i][2],
    title:csvData[i][1],
    price:csvData[i][4],
    sale_price:csvData[i][5]
});

}

var json = Data;
  return json; 
}
