class ContactUs {
    constructor(page){
        this.page=page
    }
    namefield(){
        return this.page.locator('[placeholder="Name"]');
    }
    emailfield(){
        return this.page.locator('[placeholder="Email"]');
    }
    subjectfield(){
        return this.page.locator('[placeholder="Subject"]');
    }
    filefield(){
        return this.page.locator('[type="file"]');
    }
    messagefield(){
        return this.page.locator('[id="message"]');
    }
    submit_btn(){
        return this.page.locator('[name="submit"]');
    }

}export default ContactUs;
