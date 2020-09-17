import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class DemoComponent extends NavigationMixin(LightningElement) {
    accountId;
    handleSuccess(event) {
        console.log(event.detail.id);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.detail.id,
                objectApiName: 'Demo__c',
                actionName: 'view'
            }
    })
}
}