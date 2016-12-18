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

        var volunteering = [{
            position: 'High School Stream Program Director',
            organization: 'Future Female Techmakers Conference'
        },
        {
            position: 'Database Workshop Facilitator',
            organization: 'Catalyst Conference for Grade 11 Girls'
        },
        {
            position: 'Orientation Leader',
            organization: 'University of Waterloo'
        },
        {
            position: 'Writer and Illustrator for the Math Department\'s newspaper, mathNEWS',
            organization: 'University of Waterloo'
        },
        {
            position: 'Member of UW Knitting Club',
            organization: 'University of Waterloo'
        }]

        var awards = [
        'Ontario Scholar, Honours Society',
        'Manufacturing Subject Award',
        'Diane Finley Leadership Award',
        'Ontario Principals Council Scholarship',
        'Nominated for Valedictorian'
        ]

        var interests = [
        'Board games',
        'Knitting',
        'Yoga',
        'Dungeons & Dragons',
        'Tie dye'
        ]

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