workflow "build & test on PR" {
  resolves = [,
    "node:12"
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

action "node:12" {
  needs = [
    "node:8",
    "node:10",
    "node:11"
  ]
  uses = "docker://node:12"
  args = "sh scripts/build-test.sh"
}

workflow "release" {
  resolves = [
    "github-release"
  ]
  on = "push"
}

action "push:node:8" {
  uses = "docker://node:8"
  args = "sh scripts/build-test.sh"
}

action "push:node:10" {
  uses = "docker://node:10"
  args = "sh scripts/build-test.sh"
}

action "push:node:11" {
  uses = "docker://node:11"
  args = "sh scripts/build-test.sh"
}

action "push:node:12" {
  needs = [
      "push:node:8",
      "push:node:10",
      "push:node:11",
  ]
  uses = "docker://node:12"
  args = "sh scripts/build-test.sh"
}

action "release:filter" {
  needs = [
    "push:node:12"
  ]
  uses = "actions/bin/filter@master"
  args = "tag v*"
}

action "release:authorization" {
  needs = ["release:filter"]
  uses = "actions/bin/filter@master"
  args = ["actor", "ayusharma", "juanpicado"]
}

action "release:publish" {
  needs = [
    "release:authorization"
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