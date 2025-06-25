import {test} from '@playwright/test';
import CustomExcel from '../Utils/Customexcel';


test.describe('Frequently used utilities', ()=>{
    test('creating a excel file using custom excel util', async({page})=>{
        
     let Exceldata = [
        {NAME: 'narasimha', AGE: 30, CITY: 'Hyderabad'},
     ]
        CustomExcel.createExcelFiles(Exceldata, './excelutilsPractice/ExcelData9.xlsx');
        console.log("Excel file created successfully with multiple columns!");
    })

    test('deleteing a excel file using custom excel util', async({page})=>{
        
        CustomExcel.deleteExcelFile('./excelutilsPractice/ExcelData9.xlsx');
        console.log("Excel file deleted successfully!");
        
    });




});