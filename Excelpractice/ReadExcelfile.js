const xlsx=require('xlsx');

const filepath='./excelutilsPractice/createdata1.xlsx';
// Read the Excel file

const workbook=xlsx.readFile(filepath);
const worksheet=workbook.Sheets['newsheet'];
const data=xlsx.utils.sheet_to_json(worksheet);
console.log(data);