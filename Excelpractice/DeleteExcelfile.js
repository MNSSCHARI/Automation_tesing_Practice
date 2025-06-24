import fs from 'fs';

for (let i = 0; i<=5; i++) {
    

const filepath=`./excelutilsPractice/ExcelData${[i+1]}.xlsx`;
// Read the Excel file
fs.unlink(filepath, (err)=>{
    if (err){
        console.log("Error deleting the file:");
    }else{
        console.log(` ${[i]}  File deleted successfully`);
    }
});
}