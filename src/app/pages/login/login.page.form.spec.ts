import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";

describe('LoginPageForm', () => {

    let loginPageForm: LoginPageForm;
    let form: FormGroup;

    beforeEach(() => {
        loginPageForm = new LoginPageForm(new FormBuilder());
        form = loginPageForm.createForm();
    });

    it('should create login form empty', () => {
        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email')?.value).toEqual("");  // Perbaiki akses optional chaining
        expect(form.get('email')?.valid).toBeFalse();   // Gunakan toBeFalse()
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password')?.value).toEqual("");
        expect(form.get('password')?.valid).toBeFalse(); // Gunakan toBeFalse()
    });

    it('should have email invalid if email is not valid', () => {
        form.get('email')?.setValue('invalid email');

        expect(form.get('email')?.valid).toBeFalse();  // Gunakan toBeFalse()
    });

    it('should have email valid if email is valid', () => {
        form.get('email')?.setValue('valid@email.com');
        expect(form.get('email')?.valid).toBeTrue();  // Gunakan toBeTrue()
    });

    it('should have a valid form', () => {
        form.get('email')?.setValue('valid@email.com');
        form.get('password')?.setValue('anyPassword');
        expect(form.valid).toBeTrue();  // Gunakan toBeTrue()
    });

});
