class AlarmClock {
    constructor(alarmCollection, timerId){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock( time, callback, id){
        if (!id){
            throw new Error('error text');
        }
        const findAlarm = this.alarmCollection.find((elem) => elem.id === id)
        if(findAlarm) {
            console.error('Будильник с таким id уже существует');
            return;
        }
        this.alarmCollection.push({time, callback, id});
    }

    removeClock(id) {
        const newAllarmCollection = this.alarmCollection.filter((alarm) => alarm.id !== id)       
        if (this.alarmCollection.length === newAllarmCollection.length) {
            return false;
        } else {
            this.alarmCollection = newAllarmCollection;
            return true;
        }
    }

    getCurrentFormattedTime(){
       return new Date().toLocaleTimeString().slice(0,-3);
    }

    start() {
        const checkClock = (alarm) => {
            if( this.getCurrentFormattedTime() === alarm.time) {
                
            }
         }
    }
    
}


