const tasks = [{
  Task_ID: 1,
  Task_Assigned_Employee_ID: 1,
  Task_Subject: 'Master Data',
  Task_Parent_ID: 0,
}, {
  Task_ID: 2,
  Task_Assigned_Employee_ID: 2,
  Task_Subject: 'System Configuration',
  Task_Parent_ID: 0,
}, {
  Task_ID: 3,
  Task_Assigned_Employee_ID: 4,
  Task_Subject: 'User Configuaration',
  Task_Parent_ID: 0,
}, {
  Task_ID: 4,
  Task_Assigned_Employee_ID: 31,
  Task_Subject: 'Customer Data',
  Task_Parent_ID: 1,
}, {
  Task_ID: 5,
  Task_Assigned_Employee_ID: 5,
  Task_Subject: 'Items Data',
  Task_Parent_ID: 1,
}, {
  Task_ID: 6,
  Task_Assigned_Employee_ID: 7,
  Task_Subject: 'Fixed Asset Data',
  Task_Parent_ID: 1,
}, {
  Task_ID: 7,
  Task_Assigned_Employee_ID: 2,
  Task_Subject: 'Company Detail',
  Task_Parent_ID: 2,
}, {
  Task_ID: 8,
  Task_Assigned_Employee_ID: 8,
  Task_Subject: 'Running Number',
  Task_Parent_ID: 2,
}, {
  Task_ID: 9,
  Task_Assigned_Employee_ID: 9,
  Task_Subject: 'User Profile',
  Task_Parent_ID: 3,
}, {
  Task_ID: 10,
  Task_Assigned_Employee_ID: 10,
  Task_Subject: 'User Permission',
  Task_Parent_ID: 3,
}, {
  Task_ID: 11,
  Task_Assigned_Employee_ID: 11,
  Task_Subject: 'User Authorize',
  Task_Parent_ID: 3,
}, {
  Task_ID: 12,
  Task_Assigned_Employee_ID: 12,
  Task_Subject: 'Marketing Module',
  Task_Parent_ID: 0,
}, {
  Task_ID: 13,
  Task_Assigned_Employee_ID: 13,
  Task_Subject: 'Cross Reference',
  Task_Parent_ID: 12,
}, {
  Task_ID: 14,
  Task_Assigned_Employee_ID: 14,
  Task_Subject: 'Customer Forecast',
  Task_Parent_ID: 12,
}, {
  Task_ID: 15,
  Task_Assigned_Employee_ID: 15,
  Task_Subject: 'Customer Order',
  Task_Parent_ID: 12,
}
];

const employees = [{
  ID: 1,
  Name: 'John Heart',
  Picture: 'images/employees/01.png',
}, {
  ID: 2,
  Name: 'Samantha Bright',
  Picture: 'images/employees/04.png',
}, {
  ID: 3,
  Name: 'Arthur Miller',
  Picture: 'images/employees/02.png',
}, {
  ID: 4,
  Name: 'Robert Reagan',
  Picture: 'images/employees/03.png',
}, {
  ID: 5,
  Name: 'Greta Sims',
  Picture: 'images/employees/06.png',
}, {
  ID: 6,
  Name: 'Brett Wade',
  Picture: 'images/employees/05.png',
}, {
  ID: 7,
  Name: 'Sandra Johnson',
  Picture: 'images/employees/08.png',
}, {
  ID: 8,
  Name: 'Ed Holmes',
  Picture: 'images/employees/07.png',
}, {
  ID: 9,
  Name: 'Barb Banks',
  Picture: 'images/employees/09.png',
}, {
  ID: 10,
  Name: 'Kevin Carter',
  Picture: 'images/employees/10.png',
}, {
  ID: 11,
  Name: 'Cindy Stanwick',
  Picture: 'images/employees/15.png',
}, {
  ID: 12,
  Name: 'Sammy Hill',
  Picture: 'images/employees/11.png',
}, {
  ID: 13,
  Name: 'Davey Jones',
  Picture: 'images/employees/12.png',
}, {
  ID: 14,
  Name: 'Victor Norris',
  Picture: 'images/employees/13.png',
}, {
  ID: 15,
  Name: 'Mary Stern',
  Picture: 'images/employees/16.png',
}, {
  ID: 16,
  Name: 'Robin Cosworth',
  Picture: 'images/employees/14.png',
}, {
  ID: 17,
  Name: 'Kelly Rodriguez',
  Picture: 'images/employees/17.png',
}, {
  ID: 18,
  Name: 'James Anderson',
  Picture: 'images/employees/18.png',
}, {
  ID: 19,
  Name: 'Antony Remmen',
  Picture: 'images/employees/19.png',
}, {
  ID: 20,
  Name: 'Olivia Peyton',
  Picture: 'images/employees/20.png',
}, {
  ID: 21,
  Name: 'Taylor Riley',
  Picture: 'images/employees/21.png',
}, {
  ID: 22,
  Name: 'Amelia Harper',
  Picture: 'images/employees/22.png',
}, {
  ID: 23,
  Name: 'Wally Hobbs',
  Picture: 'images/employees/23.png',
}, {
  ID: 24,
  Name: 'Brad Jameson',
  Picture: 'images/employees/24.png',
}, {
  ID: 25,
  Name: 'Karen Goodson',
  Picture: 'images/employees/25.png',
}, {
  ID: 26,
  Name: 'Marcus Orbison',
  Picture: 'images/employees/26.png',
}, {
  ID: 27,
  Name: 'Sandy Bright',
  Picture: 'images/employees/27.png',
}, {
  ID: 28,
  Name: 'Morgan Kennedy',
  Picture: 'images/employees/28.png',
}, {
  ID: 29,
  Name: 'Violet Bailey',
  Picture: 'images/employees/29.png',
}, {
  ID: 30,
  Name: 'Ken Samuelson',
  Picture: 'images/employees/32.png',
}, {
  ID: 31,
  Name: 'Nat Maguiree',
  Picture: 'images/employees/34.png',
}, {
  ID: 32,
  Name: 'Bart Arnaz',
  Picture: 'images/employees/37.png',
}, {
  ID: 33,
  Name: 'Leah Simpson',
  Picture: 'images/employees/38.png',
}, {
  ID: 34,
  Name: 'Arnie Schwartz',
  Picture: 'images/employees/40.png',
}, {
  ID: 35,
  Name: 'Billy Zimmer',
  Picture: 'images/employees/42.png',
}, {
  ID: 36,
  Name: 'Samantha Piper',
  Picture: 'images/employees/30.png',
}, {
  ID: 37,
  Name: 'Maggie Boxter',
  Picture: 'images/employees/31.png',
}, {
  ID: 38,
  Name: 'Terry Bradley',
  Picture: 'images/employees/33.png',
}, {
  ID: 39,
  Name: 'Gabe Jones',
  Picture: 'images/employees/35.png',
}, {
  ID: 40,
  Name: 'Lucy Ball',
  Picture: 'images/employees/36.png',
}, {
  ID: 41,
  Name: 'Jim Packard',
  Picture: 'images/employees/43.png',
}, {
  ID: 42,
  Name: 'Hannah Brookly',
  Picture: 'images/employees/39.png',
}, {
  ID: 43,
  Name: 'Harv Mudd',
  Picture: 'images/employees/44.png',
}, {
  ID: 44,
  Name: 'Clark Morgan',
  Picture: 'images/employees/45.png',
}, {
  ID: 45,
  Name: 'Todd Hoffman',
  Picture: 'images/employees/46.png',
}, {
  ID: 46,
  Name: 'Jackie Garmin',
  Picture: 'images/employees/47.png',
}, {
  ID: 47,
  Name: 'Lincoln Bartlett',
  Picture: 'images/employees/49.png',
}, {
  ID: 48,
  Name: 'Brad Farkus',
  Picture: 'images/employees/50.png',
}, {
  ID: 49,
  Name: 'Jenny Hobbs',
  Picture: 'images/employees/48.png',
}, {
  ID: 50,
  Name: 'Dallas Lou',
  Picture: 'images/employees/41.png',
}, {
  ID: 51,
  Name: 'Stu Pizaro',
}];

const priorities = [
  { id: 1, value: 'Low' },
  { id: 2, value: 'Normal' },
  { id: 3, value: 'Urgent' },
  { id: 4, value: 'High' },
];
