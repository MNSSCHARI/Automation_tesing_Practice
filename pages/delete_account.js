class Delete_account{
    constructor(page){
        this.page=page
    }

    delete_text(){
        return this.page.locator('[class="title text-center"]');
    }
    continue_btn(){
        return this.page.locator('[class="btn btn-primary"]');
    }
}
export default Delete_account;