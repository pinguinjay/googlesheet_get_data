/*
程式設計者：PEI-YUAN,CHIANG
本程式碼採用MIT開放原始碼授權(The MIT License)，引用或修改請放置版權說明


設定說明：
1. 資料庫的spreadsheet id可以從google試算表的網址中找到，例如你開啟的某個google試算表的網址如下
https://docs.google.com/spreadsheets/d/1YdHEt4Fo0C8meFSKDMoDCs6HfL6B7CejFLPE7eApwlE/edit...
則spreadsheet id 為 /d/-----/edit 之間的值，即 1YdHEt4Fo0C8meFSKDMoDCs6HfL6B7CejFLPE7eApwlE
記得放在單引號''內
2. 試算表中，學生的帳號密碼請放在與下面idpasswdname名稱相同的活頁簿中
3. index.html 中的文字部分可以根據需求修改，如果了解html語法也可以進行修改
4. 有任何修改請記得選擇新的版本號並重新發佈，記得將「具有應用程式存取權的使用者」設定為「任何人，甚至是匿名使用者」
5. 文件中主要使用的程式語言為javascript,css,與 html ，使用者可以自行根據需要修改
6. 新增功能：有老師建議查詢成績的結果能顯示如平均等不具個人隱私的資料，如果要實現此功能，請在存放學號的該欄位，輸入"顯示"，則在顯示後該列所有資料都會出現在資料查詢的結果中。
*/


//設定資料庫的spreadsheet id，請將spreadsheet id 字串放在單引號中 
var ssid='';

//放置帳號密碼的工作表名稱
var idpasswdname='帳號密碼';

//網頁標題，可自訂名稱
var title='成績查詢系統';
