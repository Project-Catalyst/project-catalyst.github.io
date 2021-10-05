<template>
    <div>
        <span v-if="!canVote">
            <v-btn
                elevation="2"
                block
                :href="
                    'https://github.com/login/oauth/authorize?client_id=Iv1.75f9d9c2e09de0f5&state=' +
                    generateUniqueID()
                "
                style="margin-bottom: 1rem"
            >
                <font-awesome-icon
                    :icon="['fab', 'github']"
                    size="lg"
                    style="margin-right: 0.5rem"
                />
                Sign in with Github
            </v-btn>
        </span>
        <span v-if="canVote">
            <v-btn block outlined style="margin-bottom: 1rem">
                You are signed in to
                <font-awesome-icon
                    :icon="['fab', 'github']"
                    size="lg"
                    style="margin-left: 0.5rem"
                />
            </v-btn>
        </span>
        <div v-for="bounty in bounties" :key="bounty.id">
            <bounty-card
                :bounty="bounty"
                :canVote="canVote"
                :loading="loading"
            />
        </div>
    </div>
</template>
<script>
    const API_HOST = "bounty-api.cardanocataly.st";
    import BountyCard from "./BountyCard.vue";
    export default {
        name: "BountVoting",
        components: {
            BountyCard,
        },

        props: {
            label: {
                type: String,
                required: false,
                default: "",
            },
        },
        data: function () {
            return {
                loading: true,
            };
        },
        asyncComputed: {
            async bounties() {
                this.loading = true;
                const bounties = await this.axios.get(
                    `https://${API_HOST}/bounties/${this.label}`,
                    { withCredentials: true }
                );
                this.loading = false;
                return bounties.data;
            },
            async canVote() {
                // console.log("canVote", this.generateUniqueID());
                let canVote = await this.axios.get(
                    `https://${API_HOST}/can_i_vote?state=${this.generateUniqueID()}`,
                    { withCredentials: true }
                );
                return canVote.data;
            },
        },
        methods: {
            generateUniqueID: function () {
                //We need to be in the browser, otherwise localStorage is not defined https://github.com/gridsome/gridsome/issues/191
                let isLocalStorage = true
                try {
                    localStorage.getItem("uniqueID")
                }catch(e){
                    // console.log('localStorage unavailable')
                    isLocalStorage =false
                }
                if(isLocalStorage){
                    let uniqueID = localStorage.getItem("uniqueID");
                    if (uniqueID === null) {
                        uniqueID = Math.random().toString(16).substring(2, 16);
                        uniqueID += Math.random().toString(16).substring(2, 16);
                        localStorage.setItem("uniqueID", uniqueID);
                        return uniqueID;
                    }
                    return uniqueID;
                }
                return null
            },
            upvote: async function (issue) {
                const result = this.axios.get(
                    `https://${API_HOST}/upvote?state=${this.generateUniqueID()}&issue=${issue}`,
                    { withCredentials: true }
                );
                this.$asyncComputed.bounties.update();
                return result;
            },
            downvote: async function (issue) {
                const result = this.axios.get(
                    `https://${API_HOST}/downvote?state=${this.generateUniqueID()}&issue=${issue}`,
                    { withCredentials: true }
                );
                this.$asyncComputed.bounties.update();
                return result;
            },
        },
        mounted: async function () {

        },
    };
</script>
<style scoped>
    .green {
    }
</style>