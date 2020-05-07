angular.module('myResume').factory('SidebarService',
    [
    function () {
        var skills = [
        'ReactJS',
        'TypeScript',
        'HTML5',
        'CSS3',
        'Python',
        'AngularJS',
        'BootStrap',
        'SQL',
        'Git',
        ];

        var education = [{
            degree: 'Bachelor of Computer Science, Co-op',
            location: 'University of Waterloo',
            date: '09/12 - 08/17'
        }]

        return ({
            getSkills: getSkills,
            setSkills: setSkills,
            getEducation: getEducation,
            setEducation: setEducation,
            getVolunteering: getVolunteering,
            setVolunteering: setVolunteering,
            getAwards: getAwards,
            setAwards: setAwards,
            getInterests: getInterests,
            setInterests: setInterests
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

        function getVolunteering() {
            return volunteering;
        }

        function setVolunteering(newVolunteering) {
            volunteering = newVolunteering;
        }

        function getAwards() {
            return awards;
        }

        function setAwards(newAwards) {
            awards = newAwards;
        }

        function getInterests() {
            return interests;
        }

        function setInterests(newInterests) {
            interests = newInterests;
        }
    }]);
