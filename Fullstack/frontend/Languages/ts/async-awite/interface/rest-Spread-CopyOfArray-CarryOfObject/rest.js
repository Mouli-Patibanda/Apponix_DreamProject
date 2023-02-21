function studentsProject(name1, name2) {
    var name3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        name3[_i - 2] = arguments[_i];
    }
    console.log(name1);
    console.log(name2);
    console.log(name3);
}
studentsProject('suresh', 'ramesh', 'saritha');
studentsProject('jeevan', 'ram', 'bheem');
studentsProject('ajun', 'kavitha', 'bavitha');
studentsProject('choka', 'nikarr', 'sliper', 'thoka');
studentsProject('gajal', 'bokka', 'venkateswarlu', 'bujji');
