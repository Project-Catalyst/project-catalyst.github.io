<template>
    <div v-if="bounties !== null">
        <span><a href="https://github.com/login/oauth/authorize?client_id=Iv1.75f9d9c2e09de0f5">Sign in to GitHub to vote</a></span>
        <div v-if="loading">loading...</div>
        <div v-for="bounty in bounties" :key="bounty.id">
            <a :href="bounty.html_url" target="_blank">title: {{bounty.title}}</a><br/>
            posted by: {{bounty.user.login}}
            <img :src="bounty.user.avatar_url"/>
            <div v-if="bounty.assignee !== null">
                assigned to: {{bounty.assignee.login}}
                <img :src="bounty.assignee.avatar_url"/>
            </div>
            <div v-html="parseBountyBody(bounty.body)"></div>
            <div>Rank: {{bounty.rank || 0}}</div>
            <div>Votes: {{bounty.votes || 0}}</div>
            <div>Upvote</div>
            <div>Downvote</div>
        </div>
        
    </div>
</template>
<script>
    export default {
        props: {
          labels: {
              type: String,
              required: false,
              default:''
          }  
        },
        data:function(){
            return {
                bounties: [],
                votes: {},
                loading: false,
            }
        },
        methods:{
            parseBountyBody: function(body){
                return body;
            },
            getVotes(bounty){
                return this.votes[""+bounty.number]
            },
            getReactions(){
                const self = this
                this.bounties.forEach( bounty =>{
                    this.axios.get(`https://api.github.com/repos/Project-Catalyst/project-catalyst.github.io/issues/${bounty.number}/reactions`,
                    { headers:{ 
                        'Authorization': 'token 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',
                        'Accept': 'application/vnd.github.squirrel-girl-preview+json'
                        }
                    }).then( response => {
                        const bounty_number = /issues\/\d+\//g.exec(response.url)[0].replace('issues/','').replace('/','')
                        const vote_count = response.body.length
                        if(response.body.length > 0){
                            let rank = 0;
                            response.body.forEach( reaction =>{
                                if(reaction.content === 'heart') rank = rank + 2 
                                if(reaction.content === 'rocket') rank += 3
                                if(reaction.content === '+1') rank += 1
                                if(reaction.content === '-1') rank -= 1
                            })
                            const index = this.bounties.findIndex(el => {
                                return el.number === parseInt(bounty_number)
                            })
                            this.bounties[index]['rank']=rank
                            this.bounties[index]['votes']=response.body.length
                        }
                        self.loading = false
                    }, error =>{
                        console.error(error)
                    })
                })
                
            },
            
        },
        mounted: function (){
            this.loading = true
            console.log(window.location)
            this.axios.get('https://api.github.com/repos/Project-Catalyst/project-catalyst.github.io/issues',
                { params:{ labels: `${this.labels}` },
                  headers:{ 'Authorization': 'token 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' },
                  
                })
                .then(response =>{
                this.bounties = response.body
                this.getReactions()
            },error => {
                console.error(error)
            }

            )
        }
    }
</script>
<style>
</style>