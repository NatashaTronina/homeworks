class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.find(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        } 
        
        const newAlarm = {
            callback: callback,
            time: time,
            canCall: true
        };
        this.alarmCollection.push(newAlarm);
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime(){
        const timeNow = new Date();
        const hours = String(timeNow.getHours()).padStart(2, '0');
        const minutes = String(timeNow.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    start() {
        if (this.intervalId !== null) {
            return; 
        }
        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
            this.alarmCollection.forEach(call =>{ 
                if(call.time === currentTime && call.canCall){
                    call.canCall = false;
                    call.callback();
                }
            })
        }, 1000);
    }
    stop(){
        if (this.intervalId !== null) { 
            clearInterval(this.intervalId);
            this.intervalId = null;    
        }
    }

    resetAllCalls(){
        this.alarmCollection.forEach((call) => call.canCall = true);
    }

    clearAlarms(){
        this.stop(); 
        this.alarmCollection = [];
    }
} 