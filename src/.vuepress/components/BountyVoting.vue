<template>
    <div v-if="bounties !== null">

        <span v-if="!canVote">
            <a :href="'https://github.com/login/oauth/authorize?client_id=Iv1.75f9d9c2e09de0f5&state='+generateUniqueID()">Sign in to GitHub to vote</a>
        </span>
        <span v-if="canVote">
            Yay! You can vote
        </span>
        <div v-if="loading">loading...</div>
        <div v-for="bounty in bounties" :key="bounty.id">
            <bounty-card :bounty="bounty" :canVote="canVote" :loading="loading"/>
        </div>
        
    </div>
</template>
<script>
    import BountyCard from './BountyCard.vue'
    export default {
        name: 'BountVoting',
        components:{
            BountyCard
        },
       
        props: {
          label: {
              type: String,
              required: false,
              default:''
          }  
        },
        data:function(){
            return {
                loading: true,
            }
        },
        asyncComputed:{
            async bounties(){
                this.loading = true
                const bounties =  await this.axios.get(`https://ccs-api.ynvrs.eu/bounties/${this.label}`,{ withCredentials: true })
                this.loading = false
                return bounties.data
            },
            async canVote(){

                console.log('canVote',this.generateUniqueID())
                let canVote = await this.axios.get(`https://ccs-api.ynvrs.eu/can_i_vote?state=${this.generateUniqueID()}`,{ withCredentials: true })
                return canVote.data
            }
        },
        methods:{
            generateUniqueID : function(){
                let uniqueID = localStorage.getItem('uniqueID')
                if(uniqueID === null){
                    uniqueID = Math.random().toString(16).substring(2,16)
                    uniqueID += Math.random().toString(16).substring(2,16)
                    localStorage.setItem('uniqueID',uniqueID)
                    return uniqueID
                }
                return uniqueID
            },
            upvote: function (issue){
                this.axios.get(`https://ccs-api.ynvrs.eu/upvote?state=${this.generateUniqueID()}&issue=${issue}`,{ withCredentials: true })
            },
            downvote: function (issue){
                this.axios.get(`https://ccs-api.ynvrs.eu/downvote?state=${this.generateUniqueID()}&issue=${issue}`,{ withCredentials: true })
            }
        },
        mounted: async function (){   
        }
    }
</script>
<style>
</style>