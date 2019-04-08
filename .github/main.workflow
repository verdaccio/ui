workflow "build and test" {
  resolves = [
    "lint",
    "test",
    "branch-filter",
  ]
  on = "push"
}

action "branch-filter" {
  uses = "actions/bin/filter@master"
  args = "branch"
}

action "install" {
  uses = "docker://node:10"
  args = "yarn install"
}

action "build" {
  uses = "docker://node:10"
  needs = ["install"]
  args = "yarn run build"
}

action "lint" {
  uses = "docker://node:10"
  needs = ["install"]
  args = "yarn run lint"
}

action "test" {
  uses = "docker://node:10"
  needs = ["build"]
  args = "yarn run test"
}

workflow "release" {
  resolves = [
    "github-release",
    "tag-filter",
    "lint",
  ]
  on = "push"
}

action "tag-filter" {
  uses = "actions/bin/filter@master"
  args = "tag v*"
}

action "publish" {
  needs = ["test"]
  uses = "docker://node:10"
  args = "sh scripts/publish.sh"
  secrets = [
    "REGISTRY_AUTH_TOKEN",
  ]
  env = {
    REGISTRY_URL = "registry.verdaccio.org"
  }
}

action "github-release" {
  needs = ["publish"]
  uses = "docker://node:10"
  args = "sh scripts/github-release.sh"
  secrets = [
    "GITHUB_TOKEN",
  ]
}