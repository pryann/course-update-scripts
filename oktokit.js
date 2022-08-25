import Oktokit from 'node:@octokit/core'
import shell from 'node:shelljs'

const org = 'Training360'
const owner = 'pryann'
const octokit = new Octokit({ auth: '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personal-access-token123' })

function cloneRepo(repoName, folderName = '') {
  shell.exec(`git clone https://github.com/${org}/${repoName} ${folderName}`)
}

function addCommitPush(repoName) {
  shell.exec(`git add . && git commit -m "update repo" && git push`)
}

function createRemoteRepository(repoName) {

}

function deleteRemoteRepository(repoName) {
  
}