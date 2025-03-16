class Signup{
    constructor(page){
        this.page=page
    }

    male_radiobtn(){
        return this.page.locator('[id="uniform-id_gender1"]');
    }
    female_radiobtn(){
        return this.page.locator('[id="uniform-id_gender2"]');
    }
    password_field(){
        return this.page.locator('[id="password"]');
    }
    day_drpdwn(){
        return this.page.locator('[id="days"]');
    }
    month_drpdwn(){
        return this.page.locator('[id="months"]');
    }
    year_drpdwn(){
        return this.page.locator('[id="years"]');
    }
    signup_chcbx(){
        return this.page.locator('[id="newsletter"]');
    }
    sploff_chcbx(){
        return this.page.locator('[id="optin"]');
    }
    first_name(){
        return this.page.locator('[id="first_name"]');
    }
    last_name(){
        return this.page.locator('[id="last_name"]');
    }
    company_name(){
        return this.page.locator('[id="company"]');
    }
    address_first(){
        return this.page.locator('[id="address1"]');
    }
    address_second(){
        return this.page.locator('[id="address2"]');
    }
    country_drpdwn(){
        return this.page.locator('[id="country"]');
    }
    state(){
        return this.page.locator('[id="state"]');
    }
    city(){
        return this.page.locator('[id="city"]');
    }
    zipcode(){
        return this.page.locator('[id="zipcode"]');
    }
    mobile_number(){
        return this.page.locator('[id="mobile_number"]');
    }
    create_account_btn(){
        return this.page.locator('[type="submit"]').first();
    }
    account_created_text(){
    return this.page.getByText('Account Created!')
    }
    continue_btn(){
        return this.page.locator('[class="btn btn-primary"]');
    }
}
export default Signup;