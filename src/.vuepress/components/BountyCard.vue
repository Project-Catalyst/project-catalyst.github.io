<template>
    <div>
        <v-card class="mx-auto card-container">
            <v-card-title class="left">{{bounty.title}}</v-card-title>
            <v-card-text>
                <v-row class="mx-0">
                    <div class="grey--text ms-4">
                        Rating: {{ bounty.rank }} ({{ bounty.vote_count }})
                    </div>
                </v-row>
                <v-row>
                    <div class="my-4 text-subtitle-1">
                        <a :href="'https://github.com/Project-Catalyst/project-catalyst.github.io/issues/'+bounty.number" target="_blank">GitHub Page</a>
                    </div>
                </v-row>
                <v-row class="mx-0">
                    <div v-html="formatBody(bounty.body)" style="margin:1rem 0rem;"></div>
                </v-row>
                <v-row align="end" class="fill-height center">
                    <v-col align-self="start" class="pa-0" cols="6">
                        <v-avatar class="profile" color="grey" size="64" tile>
                            <v-img
                                :src="bounty.user.avatar_url"
                            ></v-img>
                        </v-avatar>
                        <div>
                            Posted by: {{ bounty.user.login }}
                        </div>
                    </v-col>
                    <v-col align-self="start" class="pa-0" cols="6" v-if="bounty.assignee !== null">
                        <v-avatar class="profile" color="grey" size="64" tile>
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
                <v-btn v-if="canVote" @click="upvote(bounty.number)">
                    <font-awesome-icon icon="thumbs-up" size="lg" style="margin-right:0.5rem;"/>
                </v-btn>
                <v-btn v-if="canVote" @click="downvote(bounty.number)">
                    <font-awesome-icon icon="thumbs-down" size="lg" style="margin-right:0.5rem;"/>
                </v-btn>
                <v-progress-circular indeterminate v-if="loading"></v-progress-circular>
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
        methods: {
            upvote: async function(bounty){
                console.log('upvote',bounty)
                try{
                    const result = await this.$parent.upvote(bounty)
                    console.log(result)
                } catch(e){
                    console.log(e)
                }
            },
            downvote: async function(bounty){
                console.log('downvote',bounty)
                try{
                    const result = await this.$parent.downvote(bounty)
                    console.log(result)
                } catch(e){
                    console.log(e)
                }
            },
            formatBody: function(body){
                let formattedBody = ''
                if(body !== null){
                    let split = body.split("###")
                    if(split.length > 0){
                        split.forEach((el) =>{
                            if(el.length>0){
                                formattedBody = formattedBody.concat(`<div>${el}</div>`)
                            }
                        })
                    }
                    // console.log(split)
                    if(formattedBody.indexOf('```text') && '```'){
                        formattedBody = formattedBody.replace('```text','<p style="margin: 1rem 0rem; text-align:justify"><strong>')
                        formattedBody = formattedBody.replace('```',"</strong></p>")
                    }

                    formattedBody = this.urlify(formattedBody)
                    if(formattedBody.length > 0){
                        return formattedBody
                    }
                    return this.urlify(body)
                }
                console.log('Body is null',body)
                return body
                
            },
            urlify: function (text) {
                const urlRegex = /(https?:\/\/[^\s]+)/g;
                return text.replace(urlRegex, (url) => {
                return `<a href="${url}>${url}</a>`;
                })
            }
        }
    };
</script>
<style>
</style>