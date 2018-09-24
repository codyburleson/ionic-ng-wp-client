import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {AuthenticationService} from '../shared/authentication.service';
import {DataService} from '../shared/data.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    login_form: FormGroup;
    error_message: string;

    constructor(
        public formBuilder: FormBuilder,
        public loadingController: LoadingController,
        public authenticationService: AuthenticationService,
        public dataService: DataService,
        private router: Router) {
    }

    ngOnInit() {
        this.login_form = this.formBuilder.group({
            username: new FormControl('', Validators.compose([
                Validators.required
            ])),
            password: new FormControl('', Validators.required)
        });
    }

    async login(value) {

        const loading = await this.loadingController.create({
            duration: 5000,
            message: 'Please wait...'
        });

        loading.present();

        this.authenticationService.doLogin(value.username, value.password)
            .subscribe(res => {
                    this.authenticationService.setUser(res);
                    // Reset the post items so that next time, they are completely
                    // reloaded for the newly authenticated user...
                    this.dataService.items = [];
                    loading.dismiss();
                    this.router.navigateByUrl('home');

                },
                err => {
                    this.error_message = 'Invalid credentials.';
                    loading.dismiss();
                    console.log(err);
                });

    }

}
