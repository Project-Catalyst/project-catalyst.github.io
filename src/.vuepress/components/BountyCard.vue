<template>
    <div>
        <v-card class="mx-auto card-container">
            <v-card-title>{{ bounty.title }}</v-card-title>
            <v-card-text>
                <v-row class="center mx-0">
                    <div class="grey--text ms-4">
                        Rating: {{ bounty.rank }} ({{ bounty.vote_count }})
                    </div>
                </v-row>
                <v-row>
                    <div class="my-4 text-subtitle-1">
                        <a :href="bounty.html_url" target="_blank"
                            >GitHub Page</a
                        >
                    </div>
                </v-row>
                <v-row class="mx-0">
                    <div v-html="bounty.body" style="margin:1rem 0rem;"></div>
                </v-row>
                <v-row align="end" class="fill-height center">
                    <v-col align-self="start" class="pa-0" cols="6">
                        <v-avatar class="profile" color="grey" size="164" tile>
                            <v-img
                                :src="bounty.user.avatar_url"
                            ></v-img>
                        </v-avatar>
                        <div>
                        Posted by: {{ bounty.user.login }}
                        </div>
                    </v-col>
                    <v-col align-self="start" class="pa-0" cols="6" v-if="bounty.assignee !== null">
                        <v-avatar class="profile" color="grey" size="164" tile>
                            <v-img
                                :src="bounty.assignee.avatar_url"
                            ></v-img>
                        </v-avatar>
                        <div>
                        Assigned to: {{ bounty.assignee.login }}
                        </div>
                    </v-col>
                    
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-btn v-if="canVote" @click="upvote(bounty.number)"
                    >Up Vote</v-btn
                >
                <v-btn v-if="canVote" @click="downvote(bounty.number)"
                    >Down Vote</v-btn
                >
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
    export default {
        props: {
            bounty: {
                type: Object,
                required: true,
            },
            canVote: {
                type: Boolean,
                required: false,
                default: false,
            },
            loading: {
                tpye: Boolean,
                required: false,
                default: false,
            },
        },
        mounted: function () {},
    };
</script>
<style>
</style>