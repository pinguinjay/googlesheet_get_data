//目的：抓取google sheet資料，並顯示在網頁上

//連結HTML 哪一個檔案要顯示資料
function doGet(){
    var html = HtmlService.createTemplateFromFile("DataTable"); //改成要顯示的HTML檔案名稱
    var check = html.evaluate(); //evaluate()會回傳一個HtmlOutput物件
    //X-Frame-Options： X-Frame-Options 是一個 HTTP 響應標頭，它有三個可能的值：DENY、SAMEORIGIN 和 ALLOWALL。這個標頭的主要目的是為了防止「點擊劫持」攻擊，即將此網站嵌入到其他網站的 iframe 中，進行一些惡意操作。
    //ALLOWALL： HtmlService.XFrameOptionsMode.ALLOWALL 是允許所有的 iframe。這意味著，此網頁可以嵌入到任何網站的 iframe 中，而不受限制
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
