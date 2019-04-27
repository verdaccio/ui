workflow "build & test" {
  resolves = [
    "lint",
    "test",
  ]
  on = "pull_request"
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

workflow "build, test & release" {
  resolves = [
    "github-release",
    "lint"
  ]
  on = "push"
}

action "release:tag-filter" {
  needs = ["test"]
  uses = "actions/bin/filter@master"
  args = "tag v*"
}

action "release:authorization" {
  needs = ["release:tag-filter"]
  uses = "actions/bin/filter@master"
  args = ["actor", "ayusharma", "juanpicado"]
}

action "release:publish" {
  needs = ["release:authorization"]
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

workflow "node version compatibility" {
  resolves = [
    "node version compatibility 8: test",
    "node version compatibility 11: test",
  ]
  on = "pull_request"
}

action "node version compatibility 8: install" {
  uses = "docker://node:8"
  args = "yarn install"
}

action "node version compatibility 8: build" {
  needs = ["node version compatibility 8: install"]
  uses = "docker://node:8"
  args = "yarn run build"
}


action "node version compatibility 8: test" {
  needs = ["node version compatibility 8: build"]
  uses = "docker://node:8"
  args = "yarn run test"
}


action "node version compatibility 11: install" {
  uses = "docker://node:11"
  args = "yarn install"
}

action "node version compatibility 11: build" {
  needs = ["node version compatibility 11: install"]
  uses = "docker://node:11"
  args = "yarn run build"
}


action "node version compatibility 11: test" {
  needs = ["node version compatibility 11: build"]
  uses = "docker://node:11"
  args = "yarn run test"
}
