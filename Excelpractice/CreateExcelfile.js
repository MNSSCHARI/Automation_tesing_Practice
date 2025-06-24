//To create multiple excel files using for loop


for(let i = 0; i<=5; i++) {
    const XLSX= require('xlsx');
    const data = [
                    {NAME: 'narasimha', AGE: 30, CITY: 'Hyderabad'},
                    {NAME: 'John', AGE: 25, CITY: 'New York'},
                    {NAME: 'Alice', AGE: 28, CITY: 'Los Angeles'},
                    {NAME: 'Bob', AGE: 35, CITY: 'Chicago'},
                    {NAME: 'Eve', AGE: 22, CITY: 'San Francisco'},
                ];
    const workbook=XLSX.utils.book_new();
    const worksheet=XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook,worksheet,'Sheet1');
    // The above code creates a new workbook and appends a worksheet with the provided data.

    //to create a file by using write file method
    XLSX.writeFile(workbook, `./excelutilsPractice/ExcelData${[i+1]}.xlsx`);

    console.log("Excel file created successfully with multiple columns!" + (i+1));
    // This code creates an Excel file with multiple columns using the XLSX library.
};