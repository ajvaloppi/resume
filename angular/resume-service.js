angular.module('myResume').factory('ResumeService',
    [
    function () {

        var name = 'Amanda J. Valoppi';

        return ({
            getName: getName,
            setName: setName
        });

        function getName() {
            return name;
        }

        function setName(newName) {
            name = newName;
        }
    }]);