public without sharing class DemoClass {
    public static List<Demo__c> getDemoRecords() {
        return 
        [
            SELECT 
                Name
            FROM Demo__c
        ];
    }
}
