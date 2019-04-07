workflow "build and test" {
  resolves = [
    "lint",
    "test",
  ]
  on = "push"
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
