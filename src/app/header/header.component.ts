import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { TaskService } from '../services/task.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(
        private translate: TranslateService,
        private taskService: TaskService) {
    }

    get translatedTexts() {
        return this.translate.i18n;
    }

    taskList$ = this.taskService.taskList$;

    productMenuItems = [
        { name: 'Fiori Fundamentals Worklist App', callback: () => { alert('Application A Clicked'); } },
        { name: 'List Report App', callback: () => { alert('Application B Clicked'); } },
        { name: 'HANA Database App', callback: () => { alert('Application C Clicked'); } }
    ];

    user = {
        initials: 'WW',
        image: './assets/images/headshot-male.jpg'
    };

    userMenu = [
        { text: 'Toggle Language', callback: this.toggleLanguage.bind(this) },
        { text: 'Settings', callback: this.settingsCallback.bind(this) },
        { text: 'Sign Out', callback: this.signOutCallback.bind(this) }
    ];

    actions = [
        {
            glyph: 'bell',
            callback: this.actionNotificationCallback,
            label: 'Notifications',
            notificationCount: 12,
            notificationLabel: 'Unread Notifications'
        }
    ];

    searchTerm = '';

    searchTerms = [
        { text: 'Apple', callback: () => { alert('Apple Clicked'); } },
        { text: 'Banana', callback: () => { alert('Banana Clicked'); } },
        { text: 'Kiwi', callback: () => { alert('Kiwi Clicked'); } },
        { text: 'Strawberry', callback: () => { alert('Strawberry Clicked'); } }
    ];

    productSwitcher = [
        {
            title: 'Fiori Home', image: './assets/images/01.png',
            callback: ($event) => { this.productSwitcherCallback($event, 'Fiori Home'); }
        },
        {
            title: 'S/4 HANA Cloud', image: './assets/images/02.png',
            callback: ($event) => { this.productSwitcherCallback($event, 'S/4 HANA Cloud'); }
        },
        {
            title: 'Analytics Cloud', image: './assets/images/03.png',
            callback: ($event) => { this.productSwitcherCallback($event, 'Analytics Cloud'); }
        },
        {
            title: 'Ariba', image: './assets/images/04.png',
            callback: ($event) => { this.productSwitcherCallback($event, 'Ariba'); }
        },
        {
            title: 'SuccessFactors', image: './assets/images/05.png',
            callback: ($event) => { this.productSwitcherCallback($event, 'SuccessFactors'); }
        },
        {
            title: 'Commerce Cloud', image: './assets/images/06.png',
            callback: ($event) => { this.productSwitcherCallback($event, 'Commerce Cloud'); }
        },
        {
            title: 'Gigya', image: './assets/images/07.png',
            callback: ($event) => { this.productSwitcherCallback($event, 'Gigya'); }
        },
        {
            title: 'Callidus Cloud', image: './assets/images/08.png',
            callback: ($event) => { this.productSwitcherCallback($event, 'Callidus Cloud'); }
        },
        {
            title: 'Fieldglass', image: './assets/images/09.png',
            callback: ($event) => { this.productSwitcherCallback($event, 'Fieldglass'); }
        },
        {
            title: 'Concur', image: './assets/images/10.png',
            callback: ($event) => { this.productSwitcherCallback($event, 'Concur'); }
        },
        {
            title: 'Cloud for Customer', image: './assets/images/11.png',
            callback: ($event) => { this.productSwitcherCallback($event, 'Cloud for Customer'); }
        },
        {
            title: 'Cloud Portal', image: './assets/images/12.png',
            callback: ($event) => { this.productSwitcherCallback($event, 'Cloud Portal'); }
        }
    ];

    exampleSearchFunction = () => {
        alert('Search Function Called with search term: ' + this.searchTerm);
    }

    toggleLanguage() {
        this.translate.use(this.translate.lang === 'en' ? 'jp' : 'en');
    }

    settingsCallback() {
        alert('Settings Clicked');
    }

    signOutCallback($event) {
        alert('Sign Out Clicked');
    }

    actionNotificationCallback($event) {
        alert('Notification Action Clicked');
    }

    productSwitcherCallback($event, product) {
        alert(product + ' Product Clicked');
    }

}
