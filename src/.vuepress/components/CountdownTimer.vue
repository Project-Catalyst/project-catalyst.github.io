<template>
    <v-sheet elevation="1" rounded>
        <span class="title">
            {{title}}
        </span>
        <span class="title sub" v-if="subtitle !== null">
            {{subtitle}}
        </span>
        
        <div class="counter">
                <div>
                    <div>
                    <div>days</div>
                    <div :class="displayPrefix(daysLeft)">{{daysLeft}}</div>
                    </div>
                    <div>:</div>
                </div>
                <div>
                    <div>
                    <div>hours</div>
                    <div :class="displayPrefix(hoursLeft)">{{hoursLeft}}</div>
                    </div>
                    <div>:</div>
                </div>
                <div>
                    <div>
                        <div>minutes</div>
                        <div :class="displayPrefix(minutesLeft)">{{minutesLeft}}</div>
                    </div>
                    <div>:</div>
                </div>
                <div>
                    <div>
                        <div>seconds</div>
                        <div :class="displayPrefix(secondsLeft)">{{secondsLeft}}</div>
                    </div>
                </div>
        </div>
    </v-sheet>
</template>
<script>
    import {
        LocalDateTime,
        ChronoUnit,
        DateTimeParseException,
    } from "@js-joda/core";
    export default {
        props: {
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
                required: false,
            },
            /**
             *
             */
            date: {
                type: String,
                required: true,
            }
        },

        data() {
            return {
                countdownDT: null,
                parseException: false,
                currentDT:null
            };
        },
        computed: {
            daysLeft: function () {
                if (this.countdownDT === null || this.currentDT === null) return 0;
                return this.currentDT.until(this.countdownDT, ChronoUnit.DAYS)
            },
            hoursLeft: function () {
                if (this.countdownDT === null || this.currentDT === null) return 0;
                return this.currentDT.until(this.countdownDT.minusDays(this.daysLeft), ChronoUnit.HOURS)
            },
            minutesLeft: function () {
                if (this.countdownDT === null || this.currentDT === null) return 0;
                return this.currentDT.until(this.countdownDT.minusDays(this.daysLeft).minusHours(this.hoursLeft), ChronoUnit.MINUTES)
            },
            secondsLeft: function () {
                if (this.countdownDT === null || this.currentDT === null) return 0;
                return this.currentDT.until(this.countdownDT.minusDays(this.daysLeft).minusHours(this.hoursLeft).minusMinutes(this.minutesLeft), ChronoUnit.SECONDS)
            },
        },
        methods:{
          displayPrefix:function(value){
              if(value<10) return 'displayPrefix'
          }  
        },
        //Conforming to VuePress Browser API Restrictions https://vuepress.vuejs.org/guide/using-vue.html
        mounted: function () {
            try {
                this.countdownDT = LocalDateTime.parse(this.$props.date);
                const self = this
                setInterval(function(){
                    self.currentDT = LocalDateTime.now()
                },1000)
            } catch (e) {
                if (e instanceof DateTimeParseException) {
                    self.parseException = true;
                } else {
                    console.error(e);
                }
            }
        },
    };
</script>
<style>
.displayPrefix::before{
    content:"0";
    color:grey
}
.title{
    display: block;
    width:100%;
    background-color: #0033AD;
    color:white;
    padding-top:0.5rem;
    font-weight: bolder;
    text-align: center;
    font-size:1.5rem;
}
.title:last-of-type{
   padding-bottom:0.5rem; 
}

.counter{
    padding: 0.5rem;
    background-color: #eeeeee;
    font-size:2rem;
    display:flex;
    justify-content: center;
}
.counter > div {
    font-size:1rem;
    align-items: flex-end;
    display:flex;
}
.counter > div > div > div{
    width: 4.5rem;
}
.counter > div > div > div:first-child{
    text-transform: uppercase;
}
.counter > div > div > div:last-child{
    font-size:2rem;
}
.counter > div:not(:last-child) > div:last-child{
    font-size: 2rem;
    height: 2.5rem;    
}

.v-sheet{
    text-align: center;
    margin:2rem;
}
</style>