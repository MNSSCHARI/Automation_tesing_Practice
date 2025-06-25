//To create multiple excel files using for loop
const XLSX= require('xlsx');
import fs from 'fs';
class CustomExcel {
    
    static createExcelFiles(exceldata,pathFileName) {
        const workbook=XLSX.utils.book_new();
        const worksheet=XLSX.utils.json_to_sheet(exceldata);
        XLSX.utils.book_append_sheet(workbook,worksheet,'Sheet1');
        // The above code creates a new workbook and appends a worksheet with the provided data.

        //to create a file by using write file method
        XLSX.writeFile(workbook, pathFileName);

        // This code creates an Excel file with multiple columns using the XLSX library.
        }
    static readExcelFile(pathFileName) {
        const workbook = XLSX.readFile(pathFileName);
        const worksheet = workbook.Sheets['Sheet1'];
        const data = XLSX.utils.sheet_to_json(worksheet);
        return data;
    }

    static deleteExcelFile(pathFileName) {
        fs.unlink(pathFileName, (err)=>{
            if (err){
                console.log("Error deleting the file:");
            }
            else{
                console.log(`File deleted successfully: ${pathFileName}`); 
            }
        });
    };

    static updateExcelFile(exceldata, pathFileName) {
        const workbook = XLSX.readFile(pathFileName);
        const updatedWorksheet=XLSX.utils.json_to_sheet(exceldata);
        // Update the worksheet with the modified data
        workbook.Sheets['Sheet1'] = updatedWorksheet;
        // Write the updated workbook back to the file
        XLSX.writeFile(workbook, pathFileName);
    }
}
export default CustomExcel;