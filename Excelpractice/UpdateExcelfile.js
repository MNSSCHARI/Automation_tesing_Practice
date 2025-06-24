const xlsx=require('xlsx');

const filepath='./excelutilsPractice/createdata1.xlsx';
// Read the Excel file

const workbook=xlsx.readFile(filepath);
const worksheet=workbook.Sheets['newsheet'];
const data=xlsx.utils.sheet_to_json(worksheet);
console.log(data);

//let us assume we want to print columns NAME and AGE
// data.forEach(row => {
//     console.log(`Name: ${row.NAME}, Age: ${row.AGE}`);
// }); 

//let us assume we want to load the data and update the AGE of a specific person

for (let i = 0; i < data.length; i++) {
    if (data[i].NAME === 'John') {
        data[i].AGE = 25; // Update the AGE of 'narasimha' to 31
         // Exit the loop after updating
         console.log(`-----> Updated AGE for ${data[i].NAME} to ${data[i].AGE}`);
    }
}


const updatedWorksheet=xlsx.utils.json_to_sheet(data);
// Update the worksheet with the modified data
workbook.Sheets['newsheet'] = updatedWorksheet;
// Write the updated workbook back to the file
xlsx.writeFile(workbook, filepath);

// console.log("Excel file updated successfully");
