################################################
# Workflow for a github release when a tag is
# pushed
################################################
workflow "github release" {
  resolves = [
    "release.github",
    "release.lint",
  ]
  on = "push"
}

action "release.filter" {
  uses = "actions/bin/filter@master"
  args = "tag v*"
}

action "release.install" {
  uses = "docker://node:10"
  needs = ["release.filter"]
  args = "yarn install"
}

action "release.build" {
  uses = "docker://node:10"
  needs = ["release.install"]
  args = "yarn run build"
}

action "release.lint" {
  uses = "docker://node:10"
  needs = ["release.install"]
  args = "yarn run lint"
}

action "release.test" {
  uses = "docker://node:10"
  needs = ["release.build"]
  args = "yarn run test"
}

action "release.auth" {
  needs = ["release.test"]
  uses = "actions/bin/filter@master"
  args = ["actor", "octocat", "torvalds"]
}

action "release.npm.publish" {
  needs = ["release.auth"]
  uses = "docker://node:10"
  args = "sh scripts/publish.sh"
  secrets = [
    "REGISTRY_AUTH_TOKEN",
  ]
  env = {
    REGISTRY_URL = "registry.npmjs.org"
  }
}

action "release.github" {
  needs = ["release.npm.publish"]
  uses = "docker://node:10"
  args = "sh scripts/github-release.sh"
  secrets = [
    "GITHUB_TOKEN",
  ]
}
