//目的：抓取google sheet資料，並顯示在網頁上

//連結HTML 哪一個檔案要顯示資料
function doGet(){
    var html = HtmlService.createTemplateFromFile("DataTable"); //改成要顯示的HTML檔案名稱
    var check = html.evaluate(); //evaluate()會回傳一個HtmlOutput物件
    //我不知道，我看github上大家都這樣弄，但是我不知道為什麼要這樣寫
    var display = check.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); 
    return display;
}

//抓整列(row)資料
function getData(){
     //var activeSheet = SpreadsheetApp.getActiveSpreadsheet(); //抓取目前的試算表
     var activeSheet = SpreadsheetApp.openById("SpreadSheetID"); //抓取目前的試算表
    var sheetNo = activeSheet.getSheetByName("sheet2"); //改成要抓的內容的試算表分頁名稱
    var data = sheetNo.getDataRange().getValues(); //抓資料範圍的值   
    return data.slice(1);//第一列是標題，所以從第二列開始抓
}