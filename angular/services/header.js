angular.module('myResume').factory('HeaderService',
    [
    function () {
        var name = 'Amanda J. Valoppi';
        var address = '42°N 50’ 39.52’’, 80°W 18’ 6.17’’';
        var phone = '226-206-1422';
        var email = 'ajvalopp@uwaterloo.ca';
        var website = 'github.com/ajvaloppi';

        return ({
            getName: getName,
            setName: setName,
            getAddress: getAddress,
            setAddress: setAddress,
            getPhone: getPhone,
            setPhone: setPhone,
            getEmail: getEmail,
            setEmail: setEmail,
            getWebsite: getWebsite,
            setWebsite: setWebsite
        });

        function getName() {
            return name;
        }

        function setName(newName) {
            name = newName;
        }

        function getAddress() {
            return address;
        }

        function setAddress(newAddress) {
            address = newAddress;
        }

        function getPhone() {
            return phone;
        }

        function setPhone(newPhone) {
            phone = newPhone;
        }

        function getEmail() {
            return email;
        }

        function setEmail(newEmail) {
            email = newEmail;
        }

        function getWebsite() {
            return website;
        }

        function setWebsite(newWebsite) {
            website = newWebsite;
        }
    }]);