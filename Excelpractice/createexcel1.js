const XLSX=require('xlsx');
const data=[
    {school: 'ab1', students: 100},
    {school: 'ab2', students: 200},
    {school: 'ab3', students: 300}, 
    {school: 'ab4', students: 400},
    {school: 'ab5', students: 500},
]

const worksheet= XLSX.utils.json_to_sheet(data);
const workbook=XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook,worksheet,'Sheet1');
XLSX.writeFile(workbook,'./excelutils/createdata1.xlsx');