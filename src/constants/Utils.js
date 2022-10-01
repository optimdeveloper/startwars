import { Toast } from "native-base";
import { Platform, Linking } from "react-native";
import moment from "moment"

export default {

    showToast(message, duration = 4000, type = 'success') {

        Toast.show({
            text: message.toString(),
            duration: duration,
            position: 'top',
            type: type
        })

    },

    showWarningToast(message, duration = 4000) {

        this.showToast(message, duration, 'warning');

    },

    showErrorToast(message, duration = 4000) {

        this.showToast(message, duration, 'danger');

    },

    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    getDeviceType() {

        return Platform.select({ ios: "I", android: "A" })
    },
    getAgoDate(date, date2, remain) {

        const dateNow = date2 || new Date().getTime() / 1000
        // get total seconds between the times
        let delta = Math.abs(dateNow - date);

        const extra = !remain ? "ago" : "remaining"
        let year = Math.floor(delta / 31536000);
        delta -= year * 31536000;

        let month = Math.floor(delta / 2592000);
        delta -= month * 2592000;

        let week = Math.floor(delta / 604800);
        delta -= week * 604800;

        // calculate (and subtract) whole days
        let days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        let hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        let minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        // what's left is seconds
        let seconds = delta % 60;

        if (year > 0)
            return year < 1 ? `${year} year ${extra}` : `${year} years ${extra}`
        if (month > 0)
            return month < 1 ? `${month} month ${extra}` : `${month} months ${extra}`
        if (week > 0)
            return week < 1 ? `${week} week ${extra}` : `${week} weeks ${extra}`
        if (days > 0)
            return days < 1 ? `${days} day ${extra}` : `${days} days ${extra}`
        if (hours > 0)
            return hours < 1 ? `${hours} hour ${extra}` : `${hours} hours ${extra}`
        if (minutes > 0)
            return minutes < 1 ? `${minutes} minute ${extra}` : `${minutes} minutes ${extra}`
        if (seconds > 0)
            return seconds < 1 ? `${Math.floor(seconds)} second ${extra}` : `${Math.floor(seconds)} seconds ${extra}`
    },
    getAdultList() {

        const numbers = []

        for (let index = 1; index <= 15; index++) {
            numbers.push({ name: index.toString() })

        }
        return numbers
    },
    formatAmount(amount, currency = "$") {

        if (!amount)
            return ""
        let re = '\\d(?=(\\d{' + (3) + '})+' + ('$') + ')'
        return currency + " " + new Number(amount).toFixed(Math.max(0)).replace(new RegExp(re, 'g'), '$&,');  // 12,345.67

    },
    formatDate(date, format = 'DD-MM-YYYY HH:mm', milis = false) {
        if (!date)
            return "-"
        const newDate = !milis ? date * 1000 : date
        return moment(newDate).format(format)
    },
    openMap(lat, lng) {
        var scheme = Platform.OS === 'ios' ? 'maps:' : 'google.navigation:q=';
        var url = scheme + `${lat},${lng}`;
        Linking.openURL(url);
    }
}