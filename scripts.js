import shell from 'node:shelljs'

const privateRepoName = 'javscript-advanced-private'
const publicRepoName = 'javscript-advanced-public'
const exerciseRepoNamesPrefix = 'javascript-advanced-exercise'
const cloneExerciseRepos = []

function clonePrivateRepo() {
  cloneRepo(privateRepoName)
}

function clonePublicRepo() {
  cloneRepo(publicRepoName)
}

function cloneExerciseRepos() {
  cloneExerciseRepos.forEach(repo => cloneRepo(repo));
}

function createPublicRemoteRepos() {}

function createExerciseRemoteRepos() {}

function updatePublicContent() {
  const excludes = ['documentations', 'draws', '.git', 'node_modules']
  const excludesToShell = excludes.map(exclude => ` --exclude ${exclude}`).join('')
  shell.exec(`rsync -av ${excludesToShell} ${privateRepoName} ${publicRepoName}`)
}

function updateExerciseContent() {}

function pushPublicRepo() {}

function pushExerciseRepos() {}