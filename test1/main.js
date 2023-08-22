
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


function doGet() { 
  return HtmlService.createTemplateFromFile('index').evaluate();
}


function gettitle(){
 return title; 
}

function getallsheetnames(){
 var title=getAllSheetNames(ssid);
 
  var result=title.filter(function(element,index,arr){
   return element != idpasswdname; 
  });
                          
 return result;
}


function processForm(formObject) {
  var id = formObject.id;
  var passwd=formObject.passwd;
  var exam=formObject.exam;
  id=id.trim();
  passwd=passwd.trim();
  
  
  
  
  if(id==""||passwd==""){
   return false;
  }else if(passwd==vlookup(ssid,idpasswdname, id)){
    
   
    return showrecord(id,exam) ;
   
  }else{
   return false;
  }
  
}

function showrecord(id,exam){
  var spreadsheet = SpreadsheetApp.openById(ssid);
  var sheet=spreadsheet.getSheetByName(exam);
  var title=getRowContent(ssid,exam,1);
  title.splice(0,1);
  var record=ShowRecordByName(ssid,exam,1,1,id);
  record=Delete2DarrayColumn(record,1);
  return { title:title, record: record,exam:exam } ;
  
}

function Delete2DarrayColumn(array,column){
 var len=array.length; 
  for(var i=0;i<len;i++){
   array[i].splice(column-1,1); 
  }
 return array;
}




function vlookup(spreadsheetid,sheetname,x){
 var sheet = SpreadsheetApp.openById(spreadsheetid).getSheetByName(sheetname);
 x=x.trim();
 var xrange= sheet.getRange(1,1,sheet.getLastRow(),2).getDisplayValues();
 
 for(var i=0;i<xrange.length;i++){
  if(xrange[i][0]==x)
    {
     return xrange[i][1];
    }
  }
}




function ShowRecordByName(spreadsheetid,sheetname,startrow,startcolumn,object){
var sheet = SpreadsheetApp.openById(spreadsheetid).getSheetByName(sheetname);  
var RowNum=sheet.getLastRow();
var ColumnNum=sheet.getLastColumn();  
var objectrow=sheet.getRange(startrow,startcolumn,RowNum,ColumnNum).getDisplayValues();
  
  
var queryresult=[];
var recordstr;
  
   for(var i=0;i<objectrow.length;i++)
  {
    if(objectrow[i][0]==object||objectrow[i][0]=="顯示"){  //這裡新增只要學號區出現顯示，則把顯示後的該列資料全部存入recordstr中
      
      recordstr=objectrow[i];
      queryresult.push(recordstr);
    }
  }
  return queryresult;
}






function getColumnContent(spreadsheetid,sheetname,startcolumn){
 var sheet = SpreadsheetApp.openById(spreadsheetid).getSheetByName(sheetname);  
 var RowNum=sheet.getLastRow();
 var result=sheet.getRange(1,startcolumn,RowNum,1).getDisplayValues();
 
 var result=[].concat.apply([], result);
 return result;
}


function getRowContent(spreadsheetid,sheetname,startrow){
 var sheet = SpreadsheetApp.openById(spreadsheetid).getSheetByName(sheetname);  
 var ColumnNum=sheet.getLastColumn();
 var result=sheet.getRange(startrow,1,1,ColumnNum).getDisplayValues();
  
 var result=[].concat.apply([], result);
 return result;
}







function getAllSheetNames(ssid){
  var sheets=SpreadsheetApp.openById(ssid).getSheets();
  var out = new Array( sheets.length );
  for (var i = 0 ; i < sheets.length ; i++ ){
  out[i] =sheets[i].getName();
  }
  return out;
}
