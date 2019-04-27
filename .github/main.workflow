workflow "build & test" {
  resolves = [
    "node:8",
    "node:10",
    "node:11",
  ]
  on = "pull_request"
}

action "PR:filter" {
  uses = "actions/bin/filter@master"
  args = "action 'opened|synchronize'"
}

action "node:8" {
  needs = ["PR:filter"]
  uses = "docker://node:8"
  args = "sh scripts/build-test.sh"
}

action "node:10" {
  needs = ["PR:filter"]
  uses = "docker://node:10"
  args = "sh scripts/build-test.sh"
}

action "node:11" {
  needs = ["PR:filter"]
  uses = "docker://node:11"
  args = "sh scripts/build-test.sh"
}

workflow "release" {
  resolves = [
    "github-release"
  ]
  on = "push"
}

action "release:filter" {
  uses = "actions/bin/filter@master"
  args = "tag v*"
}

action "release:authorization" {
  needs = ["release:filter"]
  uses = "actions/bin/filter@master"
  args = ["actor", "ayusharma", "juanpicado"]
}

action "release:node:8" {
  needs = ["release:authorization"]
  uses = "docker://node:8"
  args = "sh scripts/build-test.sh"
}

action "release:node:10" {
  needs = ["release:authorization"]
  uses = "docker://node:10"
  args = "sh scripts/build-test.sh"
}

action "release:node:11" {
  needs = ["release:authorization"]
  uses = "docker://node:11"
  args = "sh scripts/build-test.sh"
}

action "release:publish" {
  needs = [
    "release:node:8",
    "release:node:10",
    "release:node:11"
  ]
  uses = "docker://node:10"
  args = "sh scripts/publish.sh"
  secrets = [
    "REGISTRY_AUTH_TOKEN",
  ]
  env = {
    REGISTRY_URL = "registry.npmjs.org"
  }
}

action "github-release" {
  needs = ["release:publish"]
  uses = "docker://node:10"
  args = "sh scripts/github-release.sh"
  secrets = [
    "GITHUB_TOKEN",
  ]
}