//目的：抓取google sheet資料，並顯示在網頁上

//連結HTML 哪一個檔案要顯示資料
function doGet(){
    var html = HtmlService.createTemplateFromFile("DataTable");
    var check = html.evaluate();
    var display = check.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    return display;
}

//抓整列(row)資料
function getData(){
    var activeSheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheetNo = activeSheet.getSheetByName("表單回應 3"); //改成要抓的內容的試算表名稱
    var data = sheetNo.getDataRange().getValues();
    //第一列是標題，所以從第二列開始抓
    return data.slice(1);
}