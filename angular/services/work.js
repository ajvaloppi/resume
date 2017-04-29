angular.module('myResume').factory('WorkService',
    [
    function () {
        var work = [
        {
            company: 'Kik Interactive Inc.',
            location: 'Waterloo, ON',
            title: 'Web Developer',
            duration: '05/16 - 12/16',
            duties: [
            'Implemented the UI for a in-house message report moderating tool',
            'Built features for chat bots representing 6 beauty and fashion YouTubers',
            'Created a frontend application in HTML5, CSS3, and Javascript to organize and manage the virtual line for 4 experiential booths at Beautycon NYC',
            'Oversaw the virtual line of L\'Oréal\'s experiential booth at Beautycon NYC',
            'Managed and developed an experimental chat bot application in Python for users to connect with others who share similar interests; presented application\'s results during company wide meeting',
            'Designed flow documents for multiple bot experiences while reviewing and adjusting code for timely releases',
            'Organized and participated in work related extracurricular activities, such as mentoring younger co-op students in web development, creating the first knitting group, and actively attending morning yoga'
            ]
        },
        {
            company: 'Kik Interactive Inc.',
            location: 'Waterloo, ON',
            title: 'Web Developer',
            duration: '10/15 - 12/15',
            duties: [
            'Independently designed and developed the frontend of The Official Movie Night card on Kik’s browser using Javascript, HTML5, CSS3',
            'Worked with third-party developers to improve a card on Kik’s browser written in ReactJS',
            'Created animated loading screens using CSS3 animations',
            'Performed bug fixes for timely patch releases'
            ]
        },
        {
            company: 'Achievers Inc.',
            location: 'Toronto, ON',
            title: 'Software Developer',
            duration: '01/15 - 04/15',
            duties: [
            'Managed the back end code and created internationalized templates for emails using i18n language key-value pairs',
            'Programmed using SOA coding standards',
            'Handled backend design problems using PHP',
            'Wrote unit tests using PHPUnit',
            'Performed bug fixes as part of the Support Team'
            ]
        },
        {
            company: 'CGIS Spatial Solutions',
            location: 'Kitchener, ON',
            title: 'Software Developer',
            duration: '05/14 - 08/14',
            duties: [
            'Developed significant portions of a web-based platform',
            'Used JavaScript, AngularJS, HTML5, and CSS3 to tackle frontend design challenges',
            'Improved and contributed to the platform’s UX and GUI',
            'Undertook backend programming tasks'
            ]
        },
        {
            company: 'UW Student Success Office',
            location: 'Waterloo, ON',
            title: 'First Year Experience Leader',
            duration: '05/13 - 08/13',
            duties: [
            'Acted as a liaison between incoming first year students and the university',
            'Developed and presented a wide variety of sessions about the student experience',
            'Represented the math faculty for incoming students',
            'Designed and created informational displays and signage'
            ]
        }]

        return ({
            getWork: getWork,
            setWork: setWork
        });

        function getWork() {
            return work;
        }

        function setWork(newName) {
            work = newWork;
        }
    }]);