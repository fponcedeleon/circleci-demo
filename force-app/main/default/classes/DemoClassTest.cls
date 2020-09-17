@isTest
private with sharing class DemoClassTest {
    @isTest
    private static void itShouldReturnAllRecords() {
        Demo__c demo = new Demo__c();
        insert demo;

        Test.startTest();
        List<Demo__c> demoList = DemoClass.getDemoRecords();
        Test.stopTest();

        Integer actual = demoList.size();
        Integer expected = 1;
        System.assertEquals(expected, actual, 'Did not get all records');
    } 
}
