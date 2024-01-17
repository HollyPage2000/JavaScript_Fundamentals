// Declare an object cohort that has the following properties:
const cohort = {
    // a string name (e.g 'May2022')
    name: 'May2022',
    // a number id (e.g 1234)
    id: 1234,
    // an array of student names
    students: ['holly', 'louis', 'james', 'jonny']
}

// Declare a function that accepts that object as argument and print a message with the following structure:

// <COHORT_ID> - <COHORT_NAME> - <NUMBER_OF_STUDENTS> students in this cohort

function structureCohort(cohort) {
    return `${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`;
}


console.log(structureCohort(cohort));
module.exports = structureCohort;