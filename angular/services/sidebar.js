angular.module('myResume').factory('SidebarService',
    [
    function () {
        var skills = [
        'Javascript',
        'HTML5',
        'CSS3',
        'Python',
        'BootStrap',
        'AngularJS',
        'ReactJS',
        'PHP',
        'SQL',
        'Bash'
        ];

        var education = [{
            degree: 'Bachelor of Computer Science, Co-op',
            location: 'University of Waterloo',
            date: '10/12 - Present'
        }]

        return ({
            getSkills: getSkills,
            setSkills: setSkills,
            getEducation: getEducation,
            setEducation: setEducation
        });

        function getSkills() {
            return skills;
        }

        function setSkills(newSkills) {
            skills = newSkills;
        }

        function getEducation() {
            return education;
        }

        function setEducation(newEducation) {
            education = newEducation;
        }
    }]);