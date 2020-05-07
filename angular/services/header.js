angular.module('myResume').factory('HeaderService',
    [
    function () {
        var name = 'Amanda J. Valoppi';
        var address = `37° 47' 11.796''N, 122° 23' 56.76''W`;
        var phone = '650-733-5677';
        var email = 'amanda.valoppi@gmail.com';
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
