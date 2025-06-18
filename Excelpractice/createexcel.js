const XLSX=require('xlsx');
const data = [
    {test: 'test1', value: 1},
    {test: 'test2', value: 2},
    {test: 'test3', value: 3},
 

];

const worksheet=XLSX.utils.json_to_sheet(data);
const workbook=XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook,worksheet,'Sheet1');
XLSX.writeFile(workbook,'./excelutils/createdata.xlsx');
