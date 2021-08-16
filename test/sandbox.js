import { Octokit } from 'octokit'
import { createAppAuth } from "@octokit/auth-app";

const octokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
        appId: 129703,
        installationId: 18637253,
        privateKey:
            `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAqQmXNP56HumLWCxKp6FBL6XYsMfsbwUYIRa/ILOM7yCUryHu
7S+0KmCZAr5pWTXBfbfKaBZWqHlMK8hVavHPTzIAPdx0ZsNnlJG3Lpa1P39l95yE
a8TvJ/J2IcdUyVMIyuSUrP/6jCyiKeLs21pDgPW1UFPv/YeEzKLtOoddnrjTaTCm
/yW5CeuJz1+Hz0VxTocLuqkRt9lxY3sqNtw41RIP3uWvVpOCaUuUM7LHoMir3mrL
dpgLpZm3S36RKEc1Rv5DZpD7r+eT+qFgq4tVBGBb3bWaUXfgEsPgVol6RbKbPITh
Azb8eH5ZyvFOfHitt9DvJr2vI/PRFbZnz2uQqQIDAQABAoIBAGONT20ZdkigWL2M
EEebM63hKbYreDaGNIjAQb37oMPwV0CxZmpwDtZqX5L7G0Y734Gv7VfR2CWOkmqy
qIO8d9B3bScBn9gpuuYHz29zuLj1ydLDbkWeDQ9kv2fzYh7TdTkw19LvStqlKrgq
ej5RcbIQg0EUviF9X5u5VKeEs4FW+VD621wGhg4MDh3CCfcR6N/Apmc+2nGlYxQf
4/OqlSHvVn7fpzVHqFY/7sYPRcGJZNQXdzZHq6V/0NUSh0W2TvGyKWbnyjFHxIQx
2Ryx1EI6FrD52FjBZWeA2UBxlP5/gsuunm4cOUdH4YW4BxJoL0Tuuk/8F/c+rE5W
InnOTtUCgYEA3I0QqLo2tvOglkOKeUU6LaXJNPEzbMSpR+ayB5P2dxlVKNSdi6MW
hCp3SYCkbTbCUERFHnEqyJO2Jp+xNIrn67Ge/dgEG5KV1fSKCVeOuQC73NCvU/s9
IjFv79sldb86AR4bE5viAIByx9mwGiqLpgFLI33IIRJnt1V6YUFEzPMCgYEAxDTq
O8LhsHSU53neuqEFMh/rhFgL3Me7cVQsmr/uf/sF/3rjx8sHRC47jG+CSv6aAt/E
nlF9nlqQ+txDtlpORTZpdXNgBl8CXTvi13yqRauPDbLZp6PrVa6c8Jl1IjSv8w+s
PaLm6buCDo8gtmPMldzpkZfYI7fzB2RG0XK4YvMCgYB3GP4L/zKYrQrk2egnAIkg
KUxz+GQqsjAvkZZFnVMUkWt5Nwc0Zoc8K6pq2Lrx9wYLTjJ88+OEmK9eQBHzK6d9
kVcoAMSHFysudHUuAkgiAxFvdomXMi6bDlNCFPcvlGoAPH+moSDz4GkbHqSIHL14
kW4/5iZyJXw4dkI1zocWnQKBgGyOalqORJiAqDI6N4VCucE17/TVUhrhV1AoplUo
hCjDFlp3/7b3GhobCk91Er2ziDq22+5MYBhRO43QeJZX+J5KsKaPIz3jK0eybpuT
GhJaDVgi8FHUW8yYQ7TK8wft5ruwnDet/dysJhUwE4VWSkdQZtprDOcWS5x3Wsdf
la0JAoGAIhI/MhoXUeWXxdcFy/s+k6fNinAisLKedv8AQE2WX0qstmA9DQGXD4KL
qdQYVeHH9MvJ3T/8wOspOhXEOwKKbVb6RBGGK2k4W194RZxGQ/ylrKFJ53wzykaQ
xNV/ytdSpnN8kza3H6nJUuvrC/hGoOqF1nG/0aN0GUChKJ8jwGU=
-----END RSA PRIVATE KEY-----`
    }
})

main()
async function main() {
    try {
        const {
            data: { slug }
        } = await octokit.rest.apps.getAuthenticated();
        // const { 
        //     data: { id } 
        // } = await octokit.rest.apps.getOrgInstallation({ org: "Project-Catalyst" }) 
        // const installationId = id
        // console.log(installationId)
        //Owner sometimes means org
        const response = await octokit.rest.issues.listForRepo({ owner: "Project-Catalyst", repo: "project-catalyst.github.io", labels:"bounty-hunter-assigned" })
        const issues = response.data
        issues.forEach( async issue => {
            try{
                console.log(await octokit.rest.reactions.listForIssue({ owner: "Project-Catalyst", repo: "project-catalyst.github.io", issue_number: issue.number }))

            }catch(e){
                console.error(e)
            }

        })
        

    } catch (e) {
        console.error(e)
    }

}
